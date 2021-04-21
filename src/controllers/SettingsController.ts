import {Request, Response} from "express"
import { getCustomRepository } from "typeorm"
import { SettingsRepositoy } from "../repositories/SettingsRepository"

class SettingsController{
  async create(req:Request, res:Response){
    const {chat,username} = req.body
    const SettingsRepository = getCustomRepository(SettingsRepositoy)
    const settings = SettingsRepository.create({
      chat,
      username
    })

    await SettingsRepository.save(settings)
    return res.json(settings)
  }
}

export {SettingsController}