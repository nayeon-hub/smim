import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.SECRET_KEY;

export const createToken = (userId) => {
  const token = jwt.sign({ user_id: userId.toString()}, SECRET_KEY, {
    expiresIn: '2h',
  });
  return token;
}

export const verifyToken = (req, res) => {
  const token = req.headers.authorization;
  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) return res.status(500).json({ result: err});
    return res.json({ message: "유효한 토큰입니다."});
  })
};