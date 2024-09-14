import { useContext } from "react"
import { Context } from "../lib/Context"
import { ActionTypes, FilterTypes } from "../lib/Types"

export const Filter = () => {

    const context = useContext(Context)
    if(!context) {
        throw new Error("Error")
    }

    const {state, dispatch} = context
   
    return <div>
        <div className="select-wrapper">
            
            <select value={state.currentFilter} onChange={event => dispatch({type:ActionTypes.SETFILTER,
                payload:event.target.value
            })}>
                <option value={FilterTypes.ALL}>all</option>
                <option value={FilterTypes.BALLET}>ballet</option>
                <option value={FilterTypes.OPERA} >opera</option>
            </select>
        </div>
    </div>
}