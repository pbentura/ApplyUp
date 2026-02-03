import Joi from "joi";  
import { db } from "../../db";

export type Appliance = {
  job?: string;
  title: string;
  date: Date;
};

export const applianceSchema = Joi.object<Appliance>({
  job: Joi.string().optional(),
  title: Joi.string().required(),
  date: Joi.date().less("now").required(),
});

export const appliancesCollection = db.collection<Appliance>("appliances");