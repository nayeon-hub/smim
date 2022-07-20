import React from 'react';
import styled from 'styled-components';
import CommentWrapper from '../CommentWrapper/CommentWrapper';
import pinIcon from '../../../../asset/icon/icon-pin.svg';

export default function CommentPinnedPresenter({ pinnedComment, pinnedId, postWriter }) {
  // console.log(pinnedComment);
  return (
    <>
      {pinnedId ? (
        <CommentPinnedDiv>
          <CommentPinnedSpan>{postWriter}이 고정함</CommentPinnedSpan>
          <CommentWrapper cmntData={pinnedComment} />
        </CommentPinnedDiv>
      ) : null}
    </>
  );
}

const CommentPinnedDiv = styled.div``;

const CommentPinnedSpan = styled.div`
  color: #888888;
  height: 20px;
  display: flex;
  &::before {
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    background: url(${pinIcon});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    margin-right: 10px;
  }
  margin-bottom: 12px;
`;
