// Install dependencies first:
// npm init -y
// npm install express sqlite3 typeorm reflect-metadata cors dotenv
// npm install --save-dev typescript ts-node nodemon @types/express

import 'reflect-metadata';
import express from 'express';
import { DataSource } from 'typeorm';
import cors from 'cors';
import dotenv from 'dotenv';
import { User } from './entity/User';

dotenv.config();

// Initialize database connection
const AppDataSource = new DataSource({
    type: 'sqlite',
    database: 'database.sqlite',
    entities: [User],
    synchronize: true,
});

const app = express();
app.use(cors());
app.use(express.json());


app.get('/api/example', (_req, res) => {
    res.json({ message: 'Hello from the backend!' });
});

// User API
app.get('/users', async (_req, res) => {
    const users = await AppDataSource.manager.find(User);
    res.json(users);
});

app.post('/users', async (req, res) => {
    const user = AppDataSource.manager.create(User, req.body);
    const savedUser = await AppDataSource.manager.save(user);
    res.json(savedUser);
});

const startServer = async () => {
    await AppDataSource.initialize();
    console.log('Database connected');
    app.listen(3000, () => console.log('Server running on port 3000'));
};

startServer().catch((err) => console.error('Error initializing server:', err));
