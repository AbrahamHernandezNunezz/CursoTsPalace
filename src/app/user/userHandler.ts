import express, { Router, Request, Response } from 'express';
import { UserRepository } from '../../repository';

const router: Router = express.Router();
const userRepository: UserRepository = new UserRepository();

router.get('/user', (req: Request, res: Response) => {
  const user =  userRepository.findById("identificador");
  res.status(200).send(user);
  // res.send('/user GET');
});

router.post('/user', (req: Request, res: Response) => {
  try {
    const user = req.body;
    // tslint:disable-next-line:no-console
    console.log(user);
    const createdUser =  userRepository.create(user);
    res.status(201).send(createdUser);
    // res.send('/user POST');
  } catch (error) {
    res.status(500).send("error");
  }
});

router.put('/user', (req: Request, res: Response) => {
  res.send('/user PUT');
});

router.patch('/user', (req: Request, res: Response) => {
  res.send('/user PATCH');
});

router.delete('/user', (req: Request, res: Response) => {
  res.send('/user DELETE');
});

export default router;
