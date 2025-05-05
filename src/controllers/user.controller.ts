import { Request, Response } from 'express';
import { UserRepository } from '../repositories';

class userController {
  static async getAll(req: Request, res: Response) {
    const users = await UserRepository.getAll();
    res.json({ data: users });
  }

  static async getById(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const user = await UserRepository.getById(id);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
    }
    res.json({ data: user });
  }


  static async create(req: Request, res: Response) {
    const user = await UserRepository.create(req.body);
    res.status(201).json({ data: user });
  }

  static async update(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const [updated] = await UserRepository.update(id, req.body);
    if (updated === 0) res.status(404).json({ message: 'User not found' });
    res.json({ message: 'User updated' });
  }

  static async delete(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const deleted = await UserRepository.delete(id);
    if (deleted === 0) res.status(404).json({ message: 'User not found' });
    res.json({ message: 'User deleted' });
  }
};

export default userController
