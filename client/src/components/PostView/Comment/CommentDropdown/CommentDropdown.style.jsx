import React from 'react';
import styled from 'styled-components';
import {
  DropdownContainer,
  DropdownBox,
  DropdownItemBtn,
} from '../../../../styles/common/dropdown';

export default function CommentDropdownPresenter({ ref, handleCommentEdit, handleCommentDel }) {
  return (
    <CommentDropdownContainer ref={ref}>
      <CommentDropdownBox>
        <CommentDropdownBtn onClick={handleCommentEdit}>수정</CommentDropdownBtn>
        <CommentDropdownBtn onClick={handleCommentDel}>삭제</CommentDropdownBtn>
      </CommentDropdownBox>
    </CommentDropdownContainer>
  );
}

const CommentDropdownContainer = styled(DropdownContainer)``;

const CommentDropdownBox = styled(DropdownBox)``;

const CommentDropdownBtn = styled(DropdownItemBtn)``;