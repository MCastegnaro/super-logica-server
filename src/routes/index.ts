import { Router } from "express";

import { exempleRoutes } from "./exemple.routes";

const router = Router();

router.use("/exemple", exempleRoutes);

export { router };
