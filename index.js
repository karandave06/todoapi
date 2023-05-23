import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import Routes from './routs/route.js';
 import connection  from './database/db.js';
 import { getAllTodo, markTodoDone } from './controler/todo-controler.js';


 const app = express();
 app.use(cors());
 app.use(bodyParser.json({ extended: true }));
 app.use(bodyParser.urlencoded({ extended: true }))
 app.use('/',Routes)

connection(); 


 app.listen(5000, () =>{
    console.log("server is running on localhost : 5000");
 })


 app.get('/', (req,res) =>{
   res.send("welcome :)")
 })

//  app.get('/todos', getAllTodo)

//  app.get('/todos/:id', markTodoDone)





 

