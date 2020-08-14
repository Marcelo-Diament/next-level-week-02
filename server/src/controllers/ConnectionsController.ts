import { Request, Response } from 'express';
import db from '../database/connection';

export default class ConnectionsController {

  async index(request: Request, response: Response) {
    const connections = await db('connections').select();
    return response.json(connections);
  }

  async create(request: Request, response: Response) {
    const { user_id } = request.body;
    const trx = await db.transaction();
    try {
      await trx('connections').insert({
        user_id
      });
      await trx.commit();
      return response.status(201).send();
    } catch (err) {
      console.error(err);
      await trx.rollback();
      return response.status(400).json({
        error: 'Unexpected error while creating new connection'
      });
    }
  }
}