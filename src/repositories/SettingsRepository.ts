import { Entity, EntityRepository, Repository } from "typeorm";
import { Settings } from "../entities/Settings";

@EntityRepository(Settings)
class SettingsRepositoy extends Repository<Settings> {
  
}

export {SettingsRepositoy}