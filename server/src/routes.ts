import express from 'express';
import ClassesController from './controllers/ClassesController';

const routes = express.Router();
const classesControllers = new ClassesController();

routes.get('/classes-all', classesControllers.getAllClasses);
routes.get('/class/:id', classesControllers.getClassById);

routes.get('/classes', classesControllers.index);
routes.post('/classes', classesControllers.create);

export default routes;