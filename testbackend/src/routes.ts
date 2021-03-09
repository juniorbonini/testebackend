import { request, response, Router } from "express";
import { userController } from "./useCases/CreateUser";

const router = Router();

router.post("/users", (request, response) => {
    return userController.post(request, response);
})

export { router };