import { Action, ActionTypes, FilterTypes, IEvent, IState } from "./Types"

export const reducer = (state:IState, action:Action):IState => {
    switch(action.type){
        case ActionTypes.SETEVENTS:
            return {
                ...state, 
                events:action.payload as IEvent[]
            }

        case ActionTypes.SETFILTER:
            return {
                ...state,
                currentFilter:action.payload as FilterTypes
            }

        case ActionTypes.ADDEVENT:

        case ActionTypes.REMOVEEVENT:
            return {
                ...state,
                events:state.events.filter(event => event.id != action.payload)
            
            }
        
        case ActionTypes.UPDATEEVENT:
        
     
        default:
            return state
    }
}