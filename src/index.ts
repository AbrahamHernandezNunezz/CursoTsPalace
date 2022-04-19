import express, { Express } from "express";
import { userRoutes } from "./app";

const app: Express = express();
const port: number = 8000;

app.use(express.json());
app.use('/',userRoutes);

app.listen( port, ()=>{
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${ port }`);
});
