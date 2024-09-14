import axios from "axios";
import { FilterTypes, IEvent } from "./Types";

export const getEvents = async (type:FilterTypes = FilterTypes.ALL):Promise<IEvent[]> => {
    const query = type != FilterTypes.ALL ? ("?type="+type):""
    const response = await axios.get("http://localhost:3004/events" + query)
    return response.data

}

export const deleteEvent = async (id:number):Promise<void> => {
    await axios.delete("http://localhost:3004/events/" + id)
}