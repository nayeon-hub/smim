import React from 'react';
import SignupPwStyle from './SignupPw.style';

function SignupPw ({register, errors, getValues, valid, setValid }) {
  
  const handleCheckPwBlur = () => (value) => {
    const { password } = getValues();
    if (password !== value) {
      setValid({...valid, check: false});
      return "비밀번호가 일치하지 않습니다."
    } else {
      setValid({...valid, check: true});
      return true;
    }
  }
  return (
    <SignupPwStyle
      register={register}
      errors={errors}
      valid={valid}
      onCheckPwBlur={handleCheckPwBlur}
    />
  )
}

export default SignupPw;