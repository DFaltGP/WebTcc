import { Router } from "express";
import { CreateSensorController } from "../controllers/createSensorController";
import { DeleteSensorController } from "../controllers/deleteSensorController";
import { GetSensorController } from "../controllers/getSensorController";
import { PutSensorNameController } from "../controllers/putSensorController";

const createSensorController = new CreateSensorController();
const getSensorController = new GetSensorController();
const putSensorNameController = new PutSensorNameController();
const deleteSensorController = new DeleteSensorController();
const sensorRoutes = Router();

sensorRoutes.post("/", createSensorController.handle)
sensorRoutes.get("/allSensors", getSensorController.handle)
sensorRoutes.put("/putSensor/:id/:sensor_id/:name", putSensorNameController.handle)
sensorRoutes.delete("/deleteSensor/:id/:sensor_id", deleteSensorController.handle)

export { sensorRoutes }
