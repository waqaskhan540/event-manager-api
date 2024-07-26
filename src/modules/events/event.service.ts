import {Event} from "./event.model";
import {EventRepository} from "./event.repository";

const repository = new EventRepository();
export class EventService {
    getEvents():Array<Event> {
        return repository.getAll();
    }

    getEventById(id:string) : Event | undefined {
        return repository.getById(id);
    }
}