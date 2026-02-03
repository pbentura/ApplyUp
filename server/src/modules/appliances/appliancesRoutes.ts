import { Router } from "express";
import { validator } from "../..";
import {
  Appliance,
  applianceSchema,
  appliancesCollection,
} from "./appliancesModels";

export const appliancesRoutes = Router();

appliancesRoutes.get("/", async (_, response) => {
  const result = await appliancesCollection.find().toArray();
  response.json(result);
});

appliancesRoutes.post(
  "/",
  validator.body(applianceSchema),
  async (request, response) => {
    const appliance = request.body as Appliance;
    const result = await appliancesCollection.insertOne(appliance);
    response.json({ id: result.insertedId });
  },
);
