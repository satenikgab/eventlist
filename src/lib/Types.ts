import { Dispatch } from "react"

export interface IEvent {
    id: number
    title: string
    date: string
    time: string
    type: string
    composer: string
    cover: string
}

export interface IState {
    events: IEvent[]
    currentFilter :FilterTypes
    
}
export interface IContextType {
    state: IState
    dispatch: Dispatch<Action>
}
export interface Action {
    type: ActionTypes
    payload?: unknown
}

export enum ActionTypes {
    ADDEVENT,
    REMOVEEVENT,
    UPDATEEVENT,
    SETEVENTS,
    SETFILTER
}

export enum FilterTypes {
    ALL = "all",
    OPERA = "opera",
    BALLET = "ballet"
}

