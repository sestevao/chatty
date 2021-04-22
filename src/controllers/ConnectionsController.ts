import { Request, Response } from "express"
import { ConnectionsService } from "../services/ConnectionsService"

class ConnectionsController{
  async create(req:Request, res:Response){
    const { admin_id, id, user_id, socket_id } = req.body
    const connectionsService = new ConnectionsService()

    try{
      const message = await connectionsService.create({
        admin_id,
        id,
        user_id,
        socket_id
      })
      return res.json(message)
    }catch(err) {
      return res.status(400).json({
        message: err.message,
      })
    }
  }
}

export { ConnectionsController }