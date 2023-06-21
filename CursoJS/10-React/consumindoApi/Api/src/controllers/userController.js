import User from '../models/Users';

class HomeController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      const { id, nome, email } = novoUser;
      res.status(200).json({ id, nome, email });
    } catch (e) {
      res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'nome', 'email'] });
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);

      if (!user) return res.status(400).json('Este usuario não existe');

      const { id, nome, email } = user;

      return res.status(200).json({ id, nome, email });
    } catch (e) {
      return res.status(400).json(null);
    }
  }

  async update(req, res) {
    try {
      const { userId, userEmail } = req;

      if (!userId || !userEmail) {
        return res.status(400).json({
          errors: ['id inválido'],
        });
      }
      const user = await User.findByPk(userId);

      if (!user) {
        return res.status(400).json({
          errors: ['Este usuario não existe'],
        });
      }
      const newUser = await user.update(req.body);
      const { id, nome, email } = newUser;
      return res.status(200).json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['Este usuario não existe'],
        });
      }
      await user.destroy();
      return res.status(200).json(null);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new HomeController();
