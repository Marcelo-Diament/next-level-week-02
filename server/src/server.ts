import express from 'express';

const app = express();

app.use(express.json());

app.post('/users', (request, response) => {
  console.log(request.body);
  const users = [
    { name: 'Fulano', age: 25 },
    { name: 'Ciclano', age: 52 },
  ];
  return response.json(users);
});

app.listen(3333);