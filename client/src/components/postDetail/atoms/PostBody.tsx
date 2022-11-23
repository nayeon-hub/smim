import styled from 'styled-components';
import { useAppSelector } from '../../../redux/hooks';
import { PostDetailData } from '../../../type/postTypes';
import TagList from '../../common/atoms/TagList';
import Like from '../../common/atoms/Like';
import Bookmark from '../../common/atoms/Bookmark';

interface PostBodyProps {
  postDetail: PostDetailData;
}

function PostBody({ postDetail }: PostBodyProps) {
  const { loginCheck } = useAppSelector((state) => state.user);

  return (
    <BodyBox>
      <PostContent>
        <PostPara dangerouslySetInnerHTML={{ __html: postDetail.content }} />
      </PostContent>
      <TagList hashtagArr={postDetail.hashtag} />
      <PostLikeBox>
        <Like value={postDetail.meta.likes} clickState={postDetail.like} />
        {loginCheck && <Bookmark clickState={postDetail.bookmark} />}
      </PostLikeBox>
    </BodyBox>
  );
}
export default PostBody;

const BodyBox = styled.div``;

const PostContent = styled.div`
  width: 100%;
  padding: 48px 0;
`;

const PostPara = styled.div`
  font-size: 15px;
  font-weight: 500;
  line-height: 23px;
  margin-bottom: 60px;
  & > p {
    width: 100%;
    word-break: break-word;
  }
  & > p > img {
    max-width: 100%;
  }
`;

const PostLikeBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 0;
`;