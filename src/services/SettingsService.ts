import { getCustomRepository, Repository } from 'typeorm';
import { Setting } from '../entities/Setting';
import { SettingsRepository } from '../repositories/SettingsRepositoriy'

interface ISettingsCreate {
  chat: boolean;
  username: string;
}

class SettingsService {
  private settingsRepository: Repository<Setting>;

  constructor() {
    this.settingsRepository = getCustomRepository(SettingsRepository);
  }
  
  async create({ chat, username }: ISettingsCreate) {
  const userAlreadyExists = await this.settingsRepository.findOne({ username });
  // const userAlreadyExists2 = await settingsRepository.manager.query(
  //   `SELECT * FROM settings WHERE username=${username} limit=1`
  // )

  if (userAlreadyExists) {
    throw new Error('User already exists')
  }
  
  const settings = this.settingsRepository.create({ chat, username });

  await this.settingsRepository.save(settings);

  return settings;
  }

  async findByUsername(username: string) {
    const settings = await this.settingsRepository.findOne({ username });

    return settings;
  };

  async update(username: string, chat: boolean) {
    await this.settingsRepository.createQueryBuilder()
      .update(Setting)
      .set({ chat })
      .where('username = :username', { username })
      .execute();
  };
}

export { SettingsService };
