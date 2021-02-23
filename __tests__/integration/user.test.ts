import request from 'supertest';
import app from '../../src/app';
import connection from '../../src/database';

beforeAll(async () => {
  await connection.create();
});

afterAll(async () => {
  await connection.close();
});

beforeEach(async () => {
  await connection.clear();
});

it('should create a new user', async () => {
  const response = await request(app)
    .post('/users')
    .send({ name: 'Tony Stark', email: 'tony@stark.com' });

  const { name, email } = response.body;

  expect(name).toBe('Tony Stark');
  expect(email).toBe('tony@stark.com');
  expect(response.status).toBe(201);
});
