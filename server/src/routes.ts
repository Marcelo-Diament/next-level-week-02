import express from 'express';
import db from './database/connection';
import convertHourToMinutes from './utils/convertHoursToMinutes';

const routes = express.Router();

interface ScheduledItem {
  week_day: number,
  from: string,
  to: string
};

// INDEX
routes.get('/', (request, response) => {
  return response.json({ message: 'Olar Mundo' });
});

// CLASSES
routes.get('/classes',async (request, response) => {
  const allClasses = await db('classes');
  return response.json(allClasses);
});
routes.get('/classes/:id',async (request, response) => {
  const classesId = request.params.id;
  const classesItem = await (await db('classes').where('id', classesId));
  return response.json(classesItem);
});
routes.post('/classes', async (request, response) => {
  const {
    name,
    avatar,
    whatsapp,
    bio,
    subject,
    cost,
    schedule
  } = request.body;

  const insertedUsersIds = await db('users').insert({
    name,
    avatar,
    whatsapp,
    bio
  });

  const user_id = insertedUsersIds[0];

  

  const insertedClassesIds = await db('classes').insert({
    subject,
    cost,
    user_id
  });

  const class_id = insertedClassesIds[0];

  const classSchedule = schedule.map((scheduledItem: ScheduledItem) => {
    return {
      week_day: scheduledItem.week_day,
      from: convertHourToMinutes(scheduledItem.from),
      to: convertHourToMinutes(scheduledItem.to)
    };
  });



  return response.send();
});

// USERS
routes.get('/users',async (request, response) => {
  const allUsers = await db('users');
  return response.json(allUsers);
});
routes.get('/users/:id',async (request, response) => {
  const userId = request.params.id;
  const user = await (await db('users').where('id', userId));
  return response.json(user);
});
routes.post('/users', async (request, response) => {
  const {
    name,
    avatar,
    whatsapp,
    bio,
    subject,
    cost,
    schedule
  } = request.body;

  const insertedUsersIds = await db('users').insert({
    name,
    avatar,
    whatsapp,
    bio
  });

  const user_id = insertedUsersIds[0];

  await db('classes').insert({
    subject,
    cost,
    user_id
  });

  return response.send();
});

export default routes;