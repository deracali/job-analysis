import { Router } from "express";
const router = Router();

import * as controller from "../controllers/controller.js";
// Questions Routes api

router
  .route("/agriculture")
  .get(controller.getAgricultureQuestions)
  .post(controller.insetAgricQuestions)
  .delete(controller.dropQuestion);

router
  .route("/banking")
  .get(controller.getBankQuestions)
  .post(controller.insetBankQuestions)
  .delete(controller.dropQuestion);

router
  .route("/health")
  .get(controller.getHealthQuestions)
  .post(controller.insetHealthQuestions)
  .delete(controller.dropQuestion);

router
  .route("/hotel")
  .get(controller.getHotelQuestions)
  .post(controller.insetHotelQuestions)
  .delete(controller.dropQuestion);

router
  .route("/result")
  .get(controller.getResult)
  .post(controller.storeResult)
  .delete(controller.dropResult);

export default router;
