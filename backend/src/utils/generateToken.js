import jwt from 'jsonwebtoken';

const generateToken = (res, userId) => {
  // Access Token 
  const accessToken = jwt.sign({ id: userId }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: process.env.ACCESS_TOKEN_EXPIRE,
  });

  // Refresh Token 
  const refreshToken = jwt.sign({ id: userId }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: process.env.REFRESH_TOKEN_EXPIRE,
  });

  res.cookie('jwt', refreshToken, {
    httpOnly: true, 
    secure: process.env.NODE_ENV !== 'development', 
    sameSite: 'strict', 
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 Days
  });

  return accessToken;
};

export default generateToken;