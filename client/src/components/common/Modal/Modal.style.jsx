import React from 'react';
import styled from 'styled-components';
import { ColorBtn } from '../../../styles/common/buttons';

function ModalPresenter({ children, handleModalCancle, handleModalConfirm }) {
  return (
    <ModalContainer>
      <ModalOverlay onClick={handleModalCancle} />
      <ModalBox>
        <ModalText>{children}</ModalText>
        <BtnBox>
          <Btn onClick={handleModalCancle}>취소</Btn>
          <Btn onClick={handleModalConfirm}>확인</Btn>
        </BtnBox>
      </ModalBox>
    </ModalContainer>
  );
}
export default ModalPresenter;

const ModalContainer = styled.div``;

const ModalOverlay = styled.div`
  z-index: 2;
  background: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const ModalBox = styled.div`
  width: 410px;
  padding: 60px 0 23px;
  background: #fff;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 2;
  transform: translate(-50%, -50%);
  @media screen and (max-width: 612px) {
    width: 314px;
  }
`;
const ModalText = styled.h2`
  margin: 0 auto;
  width: 241px;
  white-space: pre-line;
  line-height: 25px;
  text-align: center;
`;
const BtnBox = styled.div`
  width: 127px;
  margin: 25px auto;
`;

const Btn = styled(ColorBtn)`
  background: ${({ theme }) => theme.color.yellow};
  border: none;
  & + button {
    margin-left: 15px;
  }
  &:hover {
    background: ${({ theme }) => theme.color.yellow};
    color: #fff;
  }
`;
