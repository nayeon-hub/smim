import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { targetAgeAdd } from '../../../redux/postCreate/action';
import { resetCheck } from '../../../redux/postForm/action';
import PostTargetAgePresenter from './PostTargetAge.style';

function PostTargetAge() {
  const dispatch = useDispatch();
  const postData = useSelector((state) => state.postCreateReducer);
  const postCheck = useSelector((state) => state.postFormReducer);
  const ageInput = useRef();

  useEffect(() => {
    if (postCheck.age) {
      // when targetAge state is false
      ageInput.current && ageInput.current.focus();
      console.log('나이를 입력해주세요'); // refactoring - 나중에 css 처리해야함
      dispatch(resetCheck());
    }
  }, [postCheck.age, dispatch]);

  const handleAgeSelect = (e) => {
    dispatch(targetAgeAdd(e.target.value));
  };

  return <PostTargetAgePresenter handleAgeSelect={handleAgeSelect} postData={postData} />;
}

export default PostTargetAge;
