import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import PostListHead from '../components/postlist/PostListHead/PostListHead';
import PostListBody from '../components/postlist/PostListBody/PostListBody';

function PostsPage() {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const postAge = query.get('age');
  const age = useMemo(() => {
    return postAge;
  }, [postAge]);
  const [postArray, setPostArray] = useState([]);

  return (
    <PostListMain>
      <PostListContainer>
        <PostListHeading>{age}대 질문리스트</PostListHeading>
        <PostListHead setPostArray={setPostArray} postArray={postArray} age={age} />
        <PostBodyContainer>
          <PostListBody postArray={postArray} setPostArray={setPostArray} age={age} />
        </PostBodyContainer>
      </PostListContainer>
    </PostListMain>
  );
}

export default PostsPage;

const PostListMain = styled.main``;

const PostListContainer = styled.div`
  margin: 100px auto 0;
  padding: 70px 0;
  width: 730px;
  @media screen and (max-width: 588px) {
    width: 252px;
    padding: 50px 0;
  }
  @media (min-width: 588px) and (max-width: 850px) {
    width: 482px;
  }
`;

const PostListHeading = styled.h2`
  font-size: 32px;
  margin-bottom: 90px;
  text-align: center;
  @media screen and (max-width: 588px) {
    font-size: 27px;
    margin-bottom: 54px;
  }
`;

const PostBodyContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px 14px;
  margin-top: 67px;
  position: relative;
  min-height: 250px;
  @media screen and (max-width: 588px) {
    grid-template-columns: 1fr;
    margin-top: 35px;
  }
  @media (min-width: 588px) and (max-width: 850px) {
    grid-template-columns: 1fr 1fr;
  }
`;
