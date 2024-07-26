import {RequestHandler} from "express";
import {EventService} from "./event.service";

const service = new EventService();
export const getEvents : RequestHandler = (req, res, next) => {
    res.status(200).json(service.getEvents())
}

export const getEventById : RequestHandler = (req,res, next) => {
    const id = req.params.id;
    const event = service.getEventById(id);
    
    if(event){
        res.status(200).json(event);
        return;
    }
    
    res.sendStatus(404);
}