import { Router, Request, Response } from "express";

const exempleRoutes = Router();

exempleRoutes.get("/", (req: Request, res: Response) => {
  res.json({ message: "hello world with Typescript" });
});

export { exempleRoutes };
