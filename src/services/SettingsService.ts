import { getCustomRepository } from 'typeorm';
import { SettingsRepository } from '../repositories/SettingsRepositoriy'

interface ISettingsCreate {
  chat: boolean;
  username: string;
}

class SettingsService {
  async create({ chat, username }: ISettingsCreate) {
  const settingsRepository = getCustomRepository(SettingsRepository);

  const userAlreadyExists = await settingsRepository.findOne({ username });
  // const userAlreadyExists2 = await settingsRepository.manager.query(
  //   `SELECT * FROM settings WHERE username=${username} limit=1`
  // )

  if (userAlreadyExists) {
    throw new Error('User already exists')
  }
  
  const settings = settingsRepository.create({ chat, username });

  await settingsRepository.save(settings);

  return settings;
  }
}

export { SettingsService };
