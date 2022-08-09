import React from 'react';
import { useNavigate } from 'react-router-dom';
import PostListItemPresenter from './PostListItem.style';
import getDate from '../../../utils/changedDate';
import getHashtagList from '../../../utils/limitedHashtag';

function PostListItem({ postData }) {
  const {
    meta,
    content,
    updateAt,
    hashtag,
    title,
    _id,
    owner: { nickname, imageUrl },
  } = postData;

  const navigate = useNavigate();

  const handleDetailPageMove = () => {
    navigate(`/post/view/${_id}`);
  };

  const hashtagEdition = getHashtagList(hashtag);

  const date = new Date(updateAt);
  const postDate = getDate(date);

  return (
    <PostListItemPresenter
      handleDetailPageMove={handleDetailPageMove}
      hashtag={hashtagEdition}
      content={content}
      meta={meta}
      postDate={postDate}
      title={title}
      writer={nickname}
      imgUrl={imageUrl}
      id={_id}
    />
  );
}

export default PostListItem;
