import React from 'react';
import MyProfileStyle from './MyProfile.style';
import { useSelector } from 'react-redux';

function MyProfile () {
  const { social } = useSelector((state) => state.loginReducer);

  return (
    <MyProfileStyle 
      social={social}
    />
  )
}

export default MyProfile;