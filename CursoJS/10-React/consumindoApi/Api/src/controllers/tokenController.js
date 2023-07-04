import jwt from 'jsonwebtoken';
import User from '../models/Users';

class TokenController {
  async store(req, res) {
    try {
      const { email = '', password = '' } = req.body;
      if (!email || !password) {
        return res.status(401).json({
          errors: ['Credenciais inválidas'],
        });
      }

      const user = await User.findOne({
        where: { email },
        attributes: {
          exclude: ['created_at', 'updated_at'],
        },
      });
      if (!user) {
        return res.status(401).json({
          errors: ['Este usuario não existe'],
        });
      }

      if (!(await user.passwordIsValid(password))) {
        return res.status(401).json({
          errors: ['Senha inválida'],
        });
      }

      const { id } = user;
      const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
        expiresIn: process.env.TOKEN_EXPIRATION,
      });

      const userName = user.nome;
      const userEmail = user.email;

      return res.json({
        token, user: { id, userName, userEmail },
      });
    } catch (e) {
      console.log(e);
      return res.json(null);
    }
  }
}

export default new TokenController();
