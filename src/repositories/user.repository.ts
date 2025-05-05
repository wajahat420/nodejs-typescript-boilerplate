import { Op } from 'sequelize'; // Optional, in case you need advanced filters
import { UserAttributes } from '../interfaces/user.interface';
import { User } from '../models/user.model';
import { BaseRepository } from './base.repository';

class userRepository extends BaseRepository<
  User,
  UserAttributes
> {
  // private model: ModelStatic<User>;
  constructor() {
    super(User);
    // this.model = User
  }

  /**
   * Find a user by email
   * @param email
   * @returns User | null
   */
  async findByEmail(email: string): Promise<User | null> {
    return User.findOne({ where: { email } });
  }

  /**
   * Soft delete a user with tracking info
   * @param id User ID
   * @param deletedBy ID of the user performing the delete
   */
  async softDelete(id: number, deletedBy: number): Promise<void> {
    const user = await User.findByPk(id);
    if (!user) return;

    user.deletedBy = deletedBy;
    await user.save();
    await user.destroy(); // Sets deletedAt (because paranoid is true)
  }

  /**
   * Example: Find users with partial email match
   */
  async searchByEmailTerm(term: string): Promise<User[]> {
    return User.findAll({
      where: {
        email: {
          [Op.like]: `%${term}%`,
        },
      },
    });
  }
}

export default userRepository
