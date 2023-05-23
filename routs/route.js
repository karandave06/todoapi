import express from 'express';
import {addTodo} from '../controler/todo-controler.js'
import { getAllTodo } from '../controler/todo-controler.js';
import { markTodoDone } from '../controler/todo-controler.js';
import { updateTodo } from '../controler/todo-controler.js';
import {deletTodo} from '../controler/todo-controler.js'


const route = express.Router();

route.post('/todos', addTodo);
route.get('/todos', getAllTodo);
route.get('/todos/:id', markTodoDone);
route.put('/todos/:id',updateTodo);
route.delete('/todos/:id', deletTodo)

export default route;