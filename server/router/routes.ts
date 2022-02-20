import { Router } from "express";

const create = (): Router => {
  const router = Router();

  router.get("/status", (req, res, next): void => {
    res.send("Server running");
  });

  return router;
};

export default { create };
