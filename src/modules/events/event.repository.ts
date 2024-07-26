import {Event} from "./event.model";

const events : Array<Event> = [
    {id : '1', name : "event-1", location: "location-1", datetime : Date()},
    {id : '2', name : "event-2", location: "location-2", datetime : Date()},
    {id : '3', name : "event-3", location: "location-3", datetime : Date()}
];
export class EventRepository {
    getAll():Array<Event> {
        return events;
    }
    
    getById(id:string):Event | undefined {
        return events.find(e => e.id == id);
    }
}