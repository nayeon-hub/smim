import axios from 'axios';
import checkedText from '../../utils/checkedText';

interface UpdateUserData {
  userId: string;
  nickname: string;
  email: string;
  accessToken: string;
}

interface UpdatePasswordData {
  userId: string;
  oldPassword: string;
  newPassword: string;
  newPassword2: string;
  accessToken: string | null;
}

const http = process.env.REACT_APP_SERVER_URL;

// export const getMyWriteLists = async (userId) => {
//   const { data } = await axios.get(`${http}/my/writeLists?userId=${userId}`);
  
//   if (data.success) {
//     const newData = data.writeLists.map((item) => {
//       return {
//         ...item,
//         content: checkedText(item.content),
//       }
//     });
//     return newData;
//   } else {
//     return data;
//   }
// }

// export const getBookMarkLists = async (userId) => {
//   const { data } = await axios.get(`${http}/my/bookmarkLists?userId=${userId}`);

//   if (data.success) {
//     const newData = data.bookMarkLists.map((item) => {
//       return {
//         ...item,
//         content: checkedText(item.content),
//       }
//     });
//     return newData;
//   } else {
//     return data;
//   }
// }

export const getCheckMyId = (data: string) => {
  return axios.get(`${http}/my/id-check?userId=${data}`).then((res) => {
    return res;
  })
};

export const getCheckMyName = (data: string) => {
  return axios.get(`${http}/my/name-check?userName=${data}`).then((res) => {
    return res;
  })
};

export const putChangePassWord = (data: UpdatePasswordData) => {
  return axios.put(`${http}/my/changepw`, data, {
    headers: {
      Authorization: `Bearer ${data.accessToken}`,
    }
  });
};