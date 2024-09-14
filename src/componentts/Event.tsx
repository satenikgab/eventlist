import React, { useContext } from "react"
import { ActionTypes, IEvent } from "../lib/Types"
import { Context } from "../lib/Context"
import { deleteEvent } from "../lib/Api"

interface IProps {
    event:IEvent
}
export const Event:React.FC<IProps> = ({event}) => {

    const context = useContext(Context)
    if(!context) {
        throw new Error('Context is not available');
    }

    const { dispatch} = context;

   const handleDelete = async() => {
        await deleteEvent(event.id)
        dispatch({type:ActionTypes.REMOVEEVENT, payload:event.id})
    
   }
   
    
    return <div>
        <img src={event.cover} alt="" />
        <p>{event.title}</p>
        <p>{event.date}</p>
        <strong>{event.type}</strong>
        <p>By {event.composer}</p>
        <button onClick={handleDelete}>delete</button>
        
    </div>
}