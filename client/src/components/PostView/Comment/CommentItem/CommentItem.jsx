import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import useDropdown from '../../../../hooks/useDropdown';
import useVisible from '../../../../hooks/useVisible';
import CommentItemPresenter from './CommentItem.style';

export default function CommentItem({ cmntData, groupId }) {
  const [isDropdownVisible, dropdownRef, btnRef, handleDropdownShow] = useDropdown();
  const [itemText, setItemText] = useState(cmntData.text);
  const [isTargetVisible, handleClickShow] = useVisible(false);
  const commentModalVisible = useSelector((state) => state.toggle).commentToggled;

  const handleClickCancel = () => handleClickShow(false);

  const handleTextChange = (text) => {
    setItemText(text);
  };

  return (
    <CommentItemPresenter
      cmntData={cmntData}
      btnRef={btnRef}
      handleDropdownShow={handleDropdownShow}
      isDropdownVisible={isDropdownVisible}
      dropdownRef={dropdownRef}
      groupId={groupId}
      isTargetVisible={isTargetVisible}
      handleClickShow={handleClickShow}
      handleClickCancel={handleClickCancel}
      handleTextChange={handleTextChange}
      itemText={itemText}
      commentModalVisible={commentModalVisible}
    />
  );
}
