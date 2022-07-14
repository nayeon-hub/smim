import React from 'react';
import styled from 'styled-components';
import UserImage from '../../../common/UserImage/UserImage';

export default function CommentInputPresenter({
  loginState,
  handleSubmit,
  register,
  handleClickCancel,
  onSubmit,
  id,
  loginCheck,
}) {
  return (
    <CmntForm onSubmit={handleSubmit(onSubmit)}>
      <UserImage width={'38px'} height={'38px'} />
      <CmntInput
        type='text'
        placeholder='답변을 기다립니다.'
        {...register('comment', { required: true })}
        onClick={loginCheck}
      />
      {id ? (
        <>
          <CmntBtn type='button' onClick={handleClickCancel}>
            취소
          </CmntBtn>
          <CmntBtn type='submit'>수정</CmntBtn>
        </>
      ) : (
        <>
          <CmntBtn type='button' onClick={handleClickCancel}>
            취소
          </CmntBtn>
          <CmntBtn type='submit'>게시</CmntBtn>
        </>
      )}
    </CmntForm>
  );
}

const CmntForm = styled.form`
  width: 794px;
  // height: 59px;
  // border: 1px solid #c4c4c4;
  margin-bottom: 38px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CmntInput = styled.input`
  width: 688px;
  height: 35px;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.lightGray};
  outline: none;
  resize: none;
  font-size: 13px;
`;

const CmntBtn = styled.button`
  width: 28px;
  padding: 0;
  margin-left: 17px;
`;
