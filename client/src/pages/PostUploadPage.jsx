import React, { useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import PostBottomBtn from '../components/post/PostBottomBtn/PostBottomBtn';
import PostForm from '../components/post/PostForm/PostForm';
import Modal from '../components/common/Modal/Modal';
import { postCreatePost, putPostEdit, postReadPostDetail } from '../network/post/http';

import { totalAdd, postReset } from '../redux/slice/postCreateSlice';
import { resetCheck } from '../redux/slice/postFormCheckSlice';

function PostUploadPage() {
  const { pathname } = useLocation();
  const modalVisible = useSelector((state) => state.toggle).modalToggled;
  const postData = useSelector((state) => state.postCreate);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const pathArr = pathname.split('/');
  const pathValue = pathArr[2];
  const postId = pathArr[3];
  const tkn = useSelector((state) => state.authToken).accessToken;

  const loadCreatedPost = useCallback(async () => {
    try {
      const response = await postReadPostDetail(postId, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${tkn}`,
        },
      });
      const data = response.data;
      dispatch(totalAdd(data.title, data.targetAge, data.hashtag, data.content));
    } catch (error) {
      console.error(error);
    }
  }, [postId, tkn, dispatch]);

  useEffect(() => {
    if (pathValue === 'edit') {
      loadCreatedPost();
    } else {
      dispatch(postReset()); // when pathValue is "create", post data reset
    }
    dispatch(resetCheck()); // post state reset - all false
  }, [dispatch, loadCreatedPost, pathValue]);

  const uploadPost = async (tkn) => {
    console.log(pathValue);
    if (pathValue === 'create') {
      postCreatePost(
        {
          title: postData.title,
          content: postData.content,
          hashtag: postData.hashtag,
          targetAge: postData.targetAge,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${tkn}`,
          },
        }
      )
        .then((res) => {
          console.log(res.data);
          dispatch(postReset());
          navigate('/');
        })
        .catch((err) => console.log(err));
    } else if (pathValue === 'edit') {
      console.log('action');
      putPostEdit(
        postId,
        {
          title: postData.title,
          content: postData.content,
          hashtag: postData.hashtag,
          targetAge: postData.targetAge,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${tkn}`,
          },
        }
      )
        .then((res) => {
          console.log(res.data);
          dispatch(postReset());
          navigate(-1);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      {modalVisible && (
        <Modal actionfunc={() => uploadPost(tkn)}>
          {pathValue === 'create' ? '게시물을 등록하겠습니까?' : ' 게시물을 수정하겠습니까?'}
        </Modal>
      )}
      <PostCreateContainer>
        <PostHeader>{pathValue === 'create' ? '질문하기' : ' 질문 수정 하기'}</PostHeader>
        <PostForm />
        <PostBottomBtn formState={pathValue} />
      </PostCreateContainer>
    </>
  );
}

export default PostUploadPage;

const PostCreateContainer = styled.div`
  width: 1200px;
  height: 80vh;
  margin-top: 15vh;
  margin-left: 30px;
  display: flex;
  flex-direction: column;
`;

const PostHeader = styled.h2`
  position: relative;
  width: fit-content;
  font-size: 35px;
  border-bottom: 2px solid
    ${({ palette, theme }) => (palette ? theme.color[palette] : theme.color['black'])};
  @media screen and (max-width: 550px) {
    font-size: 25px;
    width: 100px;
    left: 150px;
  }
`;
