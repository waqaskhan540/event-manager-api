import {Router , Request, Response} from "express";
import {getEventById, getEvents} from "./events.controller";

const router = Router();

router.get("/", getEvents);
router.get("/:id", getEventById)
export default router;