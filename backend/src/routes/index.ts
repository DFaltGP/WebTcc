import { Router } from "express";
import { sensorRoutes } from "./sensorRoutes";
import { userRoutes } from "./userRoutes";

const routes = Router();
routes.use("/users", userRoutes)
routes.use("/sensors", sensorRoutes)

export { routes }