import { EntityRepository, Repository } from 'typeorm';
import { Setting } from '../entities/Setting';

@EntityRepository(Setting)
class SettingsRepository extends Repository<Setting> {
  constructor(id: string, username: string, chat: Boolean, updated_at: Date, created_at: Date) {
    super();
  }
}

export { SettingsRepository };
