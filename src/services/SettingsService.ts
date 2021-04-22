import { getCustomRepository, Repository } from "typeorm"
import { Settings } from "../entities/Settings"
import { SettingsRepository } from "../repositories/SettingsRepository"

interface ISettingsCreate{
  chat: boolean
  username: string
}

class SettingsService {
  private settingsRepository:Repository<Settings>

  constructor(){
    this.settingsRepository = getCustomRepository(SettingsRepository)
  }

  async create({chat,username} : ISettingsCreate){

    //select * from settings where username='username' limit 1
    const userExists = await this.settingsRepository.findOne({
      username
    })

    if(userExists){
      throw new Error("User already exists!")
    }

    const settings = this.settingsRepository.create({
      chat,
      username
    })
    await this.settingsRepository.save(settings)
    return settings
  }
}

export { SettingsService }