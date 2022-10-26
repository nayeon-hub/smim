import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ItemTitle from './ItemTitle';
import ItemPara from './ItemPara';
import Profile from './Profile';
import TagList from './TagList';
import getDate from '../../../utils/changeDate';
import limitHashtag from '../../../utils/limitHashtag';
import IconWithValue from './IconWithValue';
import heartFill from '../../../asset/icons/icon-heart-fill.svg';
import eye from '../../../asset/icons/icon-eye.svg';

interface PostData {
  meta: any;
  content: string;
  updateAt: string;
  hashtag: Array<string>;
  title: string;
  _id: string;
  owner: any;
}

interface InventoryItemProps {
  postData: PostData;
}

function InventoryItem({ postData }: InventoryItemProps) {
  const {
    meta,
    content,
    updateAt,
    hashtag,
    title,
    _id,
    owner: { nickname, imageUrl },
  } = postData;

  const postDate = getDate(updateAt);
  const hashtagEdition = limitHashtag(hashtag);

  return (
    <ItemBox>
      <ItemAnchor to={`/post/view/${_id}`}>
        <ItemTitle>{title}</ItemTitle>
        <Profile width="23px" height="23px" imgUrl={imageUrl}>
          {nickname}
        </Profile>
        <ItemPara>{content}</ItemPara>
        <ItemEtc>
          <IconWithValue icon={eye} value={meta.likes} />
          <IconWithValue icon={heartFill} value={meta.views} />
        </ItemEtc>
        <TagList hashtagArr={hashtagEdition} marginLeft="5px" />
        <ItemDate>{postDate}</ItemDate>
      </ItemAnchor>
    </ItemBox>
  );
}

export default InventoryItem;

const ItemBox = styled.div`
  position: relative;
  height: 255px;
  border: 2px solid ${({ theme }) => theme.color.lightGray};
  border-radius: 20px;
  padding: 31px 21px;
  cursor: pointer;
`;

const ItemAnchor = styled(Link)``;

const ItemEtc = styled.div`
  display: flex;
  margin-left: 4px;
  margin-bottom: 10px;
`;

const ItemDate = styled.div`
  width: 100%;
  font-size: 10px;
  font-weight: 600;
  line-height: 16px;
  text-align: right;
  color: ${({ theme }) => theme.color.darkGray};
`;