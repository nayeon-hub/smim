import styled from 'styled-components';

interface ItemParaProps {
  children: string;
}

function ItemPara({ children }: ItemParaProps) {
  return <Para dangerouslySetInnerHTML={{ __html: children }} />;
}

export default ItemPara;

const Para = styled.p`
  height: 35px;
  font-size: 12px;
  font-weight: 700;
  line-height: 17px;
  margin-bottom: 14px;
  color: ${({ theme }) => theme.color.black};
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
