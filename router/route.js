import { Router } from "express";
const router = Router();

import * as controller from "../controllers/controller.js";
// Questions Routes api

router
  .route("/questions")
  .get(controller.getQuestions)
  .post(controller.insetQuestion)
  .delete(controller.dropQuestion);

router
  .route("/computer")
  .get(controller.getComputerQuestions)
  .post(controller.addComputerQuestions)
  .delete(controller.dropQuestion);

router
  .route("/result")
  .get(controller.getResult)
  .post(controller.storeResult)
  .delete(controller.dropResult);

export default router;
