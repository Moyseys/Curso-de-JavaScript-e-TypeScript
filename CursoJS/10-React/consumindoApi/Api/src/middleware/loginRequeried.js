import jwt from 'jsonwebtoken';
import User from '../models/Users';

export default async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({
      errors: ['Login required'],
    });
  }
  const [, token] = authorization.split(' ');
  try {
    const { id, email } = jwt.verify(token, process.env.TOKEN_SECRET);

    const user = await User.findOne({ where: { id, email } });
    console.log('aqui');
    if (!user) {
      return res.status(401).json({
        error: 'Usuário inválido',
      });
    }

    req.userId = id;
    req.userEmail = email;

    return next();
  } catch (e) {
    return res.status(400).json({
      error: 'token inválido',
    });
  }
};
