import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { postCommentCreate, putCommentEdit } from '../../../../network/comment/http';
import { createComment } from '../../../../redux/slice/commentCreateSlice';
import CommentFormPresenter from './CommentForm.style';
import { isLoginCheckToggle } from '../../../../redux/slice/toggleSlice';

export default function CommentForm({
  postId,
  parentId,
  groupId,
  isTargetVisible,
  handleClickCancel = undefined,
  handleTextChange,
  id,
  changedText,
}) {
  const loginState = useSelector((state) => state.user);
  const { register, handleSubmit, setValue, setFocus, watch } = useForm();
  const tkn = useSelector((state) => state.authToken).accessToken;
  const dispatch = useDispatch();
  let data = watch('comment');

  if (!handleClickCancel) {
    handleClickCancel = () => setValue('comment', '');
  }

  const onSubmit = (data, e) => {
    e.preventDefault();
    const addData = data.comment.replaceAll('\n', '<br>');

    if (tkn) {
      if (id) {
        handleCommentEdit(e, addData);
      } else {
        handleCommentCreate(e, addData);
      }
      setValue('comment', '');
    }
  };

  useEffect(() => {
    if (isTargetVisible) {
      setFocus('comment');
      setValue('comment', changedText);
    }
  }, [isTargetVisible, setFocus]);

  const handleCommentCreate = async (e, data) => {
    const response = await postCommentCreate(
      { post_id: postId, content: data, parent_id: parentId },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${tkn}`,
        },
      }
    );

    if (response.data.success) {
      const date = String(new Date());
      dispatch(
        createComment(
          response.data.comment_id,
          {
            userId: loginState.id,
            nickname: loginState.name,
            imageUrl: loginState.imgUrl,
          },
          date,
          parentId,
          groupId,
          postId,
          data
        )
      );
      if (parentId) {
        handleClickCancel(e);
      }
    } else {
      console.log(response.data.success);
    }
  };

  const handleCommentEdit = async (e, data) => {
    const response = await putCommentEdit(
      id,
      { post_id: postId, content: data },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${tkn}`,
        },
      }
    );

    if (response.data.success) {
      handleTextChange(data.replace('<br>', '\n'));
      handleClickCancel(e);
    } else {
      console.log(response.data.success);
    }
  };

  const handleloginCheck = (e) => {
    e.preventDefault();
    if (!tkn) {
      e.target.disabled = true;
      dispatch(isLoginCheckToggle());
    }
  };

  const handleKeyDownCheck = (e) => {
    if (e.keyCode === 13 && e.shiftKey === true) {
      e.preventDefault();
      setValue('comment', data + '\n');
    }
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      handleSubmit(onSubmit(watch(), e));
    }
  };
  return (
    <CommentFormPresenter
      loginState={loginState}
      handleSubmit={handleSubmit}
      handleClickCancel={handleClickCancel}
      handleloginCheck={handleloginCheck}
      handleKeyDownCheck={handleKeyDownCheck}
      onSubmit={onSubmit}
      register={register}
      setValue={setValue}
      value={data}
      groupId={groupId}
      parentId={parentId}
      id={id}
    />
  );
}