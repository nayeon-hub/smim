import { createSlice } from '@reduxjs/toolkit';

const initialToggleState = {
  menuToggled: false,
  loginToggled: false,
  inputToggled: false,
  modalToggled: false,
  commentToggled: false,
  imageToggled: false,
  isLoginCheckToggled: false,
  myPageToggled: false,
};

const toggleSlice = createSlice({
  name: 'toggle',
  initialState: initialToggleState,
  reducers: {
    menuToggle(state) {
      state.menuToggled = !state.menuToggled;
    },
    loginToggle(state) {
      state.loginToggled = !state.loginToggled;
    },
    inputToggle(state) {
      state.inputToggled = !state.inputToggled;
    },
    modalToggle(state) {
      state.modalToggled = !state.modalToggled;
    },
    isLoginCheckToggle(state) {
      state.isLoginCheckToggled = !state.isLoginCheckToggled;
    },
    commentModalToggle(state) {
      state.commentToggled = !state.commentToggled;
    },
    userImageToggle(state) {
      state.imageToggled = !state.imageToggled;
    },
    myPageToggle(state) {
      state.myPageToggled = !state.myPageToggled;
    }
  },
});

export const {
  loginToggle,
  menuToggle,
  inputToggle,
  modalToggle,
  commentModalToggle,
  userImageToggle,
  isLoginCheckToggle,
  myPageToggle,
} = toggleSlice.actions;

export default toggleSlice;
