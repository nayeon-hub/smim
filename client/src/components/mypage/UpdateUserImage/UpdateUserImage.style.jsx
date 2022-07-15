import React from 'react';
import styled from 'styled-components';
import UserImage from '../../common/UserImage/UserImage';

const UpdateImageModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
`;

const UpdateImageModalOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(12, 12, 12, 0.2);
`;

const ImageModalContainer = styled.section`
  width: 25%;
  height: 60%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: white;
`;

const ImageIntroduceBox = styled.div`
  width: 90%;
  height: 25%;
  border-bottom: 1px solid rgba(128, 128, 128, .4);
`;

const ImageCancelButton = styled.button`
  all: unset;
  width: 5%;
  height: 5%;
  align-self: flex-start;
  margin-left: 1.2em;
  cursor: pointer;
`;

const ImageTilte = styled.h2`
  font-size: 1.3em;
  padding-bottom: 1.2em;
`;

const ImageText = styled.p`
  font-size: 0.9em;
  line-height: 1.4em;
  word-break: keep-all;
`;

const InputFileWrapper = styled.div`
  width: 80%;
  font-size: 20px;
  display: flex;
  gap: 10px;
`;

const ImageUpdateLabel = styled.label`
  display: inline-block;
  padding: 10px 10px;
  color: deepskyblue;
  vertical-align: middle;
  background-color: #fdfdfd;
  cursor: pointer;
  border: 1px solid #ebebeb;
  border-radius: 5px;
`;

const ImageUpdateInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  clip: rect(0, 0, 0, 0);
  overflow: hidden;
  padding: 0;
`;

function UpdateUserImageStyle ({ encodeImg, imgUrl, onFileUpload, onFileRemove, onImageModalOpen, onImageUpdate}) {
  return (
    <UpdateImageModalWrapper>
      <UpdateImageModalOverlay onClick={onImageModalOpen}/>
      <ImageModalContainer>
        <ImageCancelButton type="button" onClick={onImageModalOpen}> ❌ </ImageCancelButton>
        <ImageIntroduceBox>
          <ImageTilte> 프로필 사진 </ImageTilte>
          <ImageText> 자신만의 프로필 사진으로 어필을 하기 쉬워지며 내가 계정에 로그인되어 있는지 확인할 수 있습니다. </ImageText>
        </ImageIntroduceBox>
        <UserImage
          encodeImg={encodeImg}
          imgUrl={imgUrl}
          width={"60%"}
          height={"40%"}
        />
        <InputFileWrapper>
          <ImageUpdateLabel for="user-imgAdd"> 🖋 변경 </ImageUpdateLabel>
          <ImageUpdateInput id="user-imgAdd" type="file" accept='image/*' onChange={onFileUpload} />
          <ImageUpdateLabel for='user-imgSubmit'> 💾 완료 </ImageUpdateLabel>
          <ImageUpdateInput id="user-imgSubmit" type="submit" onClick={onImageUpdate}/>
          <ImageUpdateLabel onClick={onFileRemove}> 🗑 제거 </ImageUpdateLabel>
        </InputFileWrapper>
      </ImageModalContainer>
    </UpdateImageModalWrapper>
  )
}

export default UpdateUserImageStyle;