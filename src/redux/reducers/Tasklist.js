import { ADDTOPIC, ADDTASK, COMPLETETASK } from '../actionTypes';

const initialState = {
    data: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case (ADDTOPIC): {

            const { content } = action.payload;
            const temp = { "name": content, tasklist: [] }

            return {
                ...state,
                data: { [content]: temp, ...state.data },
            };


        }
        case (ADDTASK): {
            const { content } = action.payload;
            let tlist = state.data[content.name].tasklist
            tlist.push(content.task)
            const temp = { "name": content.name, tlist }
            return {
                ...state,
                data: { [content.name]: temp, ...state.data }
            }
        }
        case (COMPLETETASK): {
            const { content } = action.payload;
            let tlist = state.data[content.name].tasklist

            for (let a of tlist) {
                if (a.taskcontent === content.task) {
                    a.completed = true;
                }
            }
            const temp = { "name": content.name, tlist }

            return {
                ...state,
                data: { [content.name]: temp, ...state.data }
            }
        }
        default:
            return state;
    }

}