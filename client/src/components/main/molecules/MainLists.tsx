import { Link } from 'react-router-dom';
import styled from 'styled-components';
import heartFill from '../../../asset/icons/icon-heart-fill.svg';
import { MainListsData } from '../../../types';

interface ListsPorps {
  age: string;
  posts: MainListsData[];
}

function MainLists({ age, posts }: ListsPorps) {
  return (
    <MainPostsContainer>
      <PostsTitle>
        <h2 id={age}> {age}대에게 질문하세요 </h2>
        <MoreLink to={`generation/${age}`}> 더보기 </MoreLink>
      </PostsTitle>
      <PostsContent>
        {posts &&
          posts.map((post) => (
            <PostsList id={post._id} key={post._id}>
              <ListHeader>
                <ListisAnswer> {!post.meta.answer ? '답변 대기' : '답변 완료'} </ListisAnswer>
                <ListTitle>{post.title.length <= 15 ? post.title : `${post.title.substring(0, 15)}...`}</ListTitle>
              </ListHeader>
              <ListContent>
                <PostOwner>{post.owner.nickname}</PostOwner>
                <PostOwner>{post.createAt.slice(5, 10).replaceAll('-', '.')}</PostOwner>
                <PostLike>{post.meta.likes}</PostLike>
              </ListContent>
            </PostsList>
          ))}
      </PostsContent>
    </MainPostsContainer>
  );
}

export default MainLists;

const MainPostsContainer = styled.div`
  width: 317px;
  height: 363px;
  border: 2px solid ${({ theme }) => theme.color.lightGray};
  border-radius: 14px;
  margin: 0 auto;
  @media ${({ theme }) => theme.device.webMiddle} {
    width: 30%;
    height: 80%;
  }
  @media ${({ theme }) => theme.device.ipad} {
    width: 90%;
    height: 521px;
  }
  @media ${({ theme }) => theme.device.mobileMiddle} {
    width: 100%;
  }
`;
const PostsTitle = styled.div`
  display: flex;
  padding: 0 15px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ${({ theme }) => theme.color.lightGray};
  height: 17%;
  font-size: 1rem;
  @media ${({ theme }) => theme.device.webMiddle} {
    font-size: 0.9rem;
  }
  @media ${({ theme }) => theme.device.ipad} {
    font-size: 1.1rem;
  }
  @media ${({ theme }) => theme.device.mobileMiddle} {
    font-size: 0.9rem;
  }
`;

const MoreLink = styled(Link)`
  width: 67px;
  height: 31px;
  padding: 0;
  background-color: ${({ theme }) => theme.color.yellow};
  border-radius: 4px;
  font-weight: 700;
  color: #ffffff;
  line-height: 31px;
  text-align: center;
  @media ${({ theme }) => theme.device.mobileMiddle} {
    width: 48px;
    height: 28px;
    line-height: 28px;
    font-size: 0.8rem;
  }
`;

const PostsContent = styled.ul`
  width: 100%;
  height: 83%;
`;

const PostsList = styled.li`
  width: 100%;
  height: 20%;
  padding: 10px;
  border-bottom: 2px solid ${({ theme }) => theme.color.lightGray};
  cursor: pointer;
  &:last-child {
    border: none;
  }
  @media ${({ theme }) => theme.device.webMiddle} {
    padding: 7px;
  }
  @meida ${({ theme }) => theme.device.ipad} {
    padding: 10px;
  }
  @media ${({ theme }) => theme.device.mobileMiddle} {
    padding: 7px;
  }
`;

const ListHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-bottom: 0.8em;
  font-size: 0.9rem;
  font-weight: bold;
  @media ${({ theme }) => theme.device.webMiddle} {
    font-size: 0.8rem;
    padding-bottom: 0.3em;
  }
  @media ${({ theme }) => theme.device.ipad} {
    font-size: 0.9rem;
    padding: 0.3em 0 0.8em 0;
  }
  @media ${({ theme }) => theme.device.mobileMiddle} {
    font-size: 0.8rem;
    padding: 0.2em 0.2em 0.9em 0;
  }
`;

const ListisAnswer = styled.p`
  width: 25%;
  color: #038cfc;
  @media ${({ theme }) => theme.device.mobileMiddle} {
    width: 30%;
  }
`;

const ListTitle = styled.h3`
  width: 80%;
  @media ${({ theme }) => theme.device.webMiddle} {
    padding-left: 5px;
  }
  @media ${({ theme }) => theme.device.ipad} {
    padding-left: 0;
  }
  @media ${({ theme }) => theme.device.mobileMiddle} {
    padding-left: 5px;
    width: 75%;
  }
`;

const ListContent = styled.div`
  display: flex;
  font-size: 0.8rem;
  align-items: center;
  @media ${({ theme }) => theme.device.webMiddle} {
    font-size: 0.7rem;
    padding-top: 0.3em;
  }
  @media ${({ theme }) => theme.device.ipad} {
    font-size: 0.8rem;
    padding-top: 0.5em;
  }
  @media ${({ theme }) => theme.device.mobileMiddle} {
    padding-top: 0.8em;
  }
`;

const PostOwner = styled.p`
  width: 23%;
  @media ${({ theme }) => theme.device.mobileMiddle} {
    width: 30%;
    font-size: 0.7rem;
  }
`;

const PostLike = styled.p`
  display: flex;
  color: ${({ theme }) => theme.color.red};
  &::before {
    content: '';
    width: 15px;
    height: 15px;
    display: block;
    background: url(${heartFill});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    padding-right: 5px;
  }
  margin-left: 10px;
  margin-right: 10px;
`;