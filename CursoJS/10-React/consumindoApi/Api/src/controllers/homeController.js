import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    try {
      const novoAluno = await Aluno.create({
        nome: 'luiz',
        sobrenome: 'otavio',
        email: 'sla@gmail.com',
        idade: 90,
        peso: 300.5,
        altura: 2.5,
      });
      res.status(200).json(novoAluno);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new HomeController();
