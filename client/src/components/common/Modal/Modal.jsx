import React from 'react';
import ModalPresenter from './Modal.style';
import { useDispatch } from 'react-redux';
import { modalToggle } from '../../../redux/slice/toggleSlice';

function Modal({ children, actionfunc }) {
  const dispatch = useDispatch();
  const handleModalCancle = () => {
    dispatch(modalToggle());
  };
  const handleModalConfirm = () => {
    actionfunc();
    dispatch(modalToggle());
  };
  return (
    <ModalPresenter handleModalCancle={handleModalCancle} handleModalConfirm={handleModalConfirm}>
      {children}
    </ModalPresenter>
  );
}
export default Modal;
