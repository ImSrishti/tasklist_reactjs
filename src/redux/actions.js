import { ADDTOPIC,ADDTASK,COMPLETETASK} from "./actionTypes";

export const addTopic = content => ({
  type: ADDTOPIC,
  payload: {
    content
  }
});
export const addTask = content => ({
    type: ADDTASK,
    payload: {
      content
    }
  });
  export const completeTask = content => ({
    type: COMPLETETASK,
    payload: {
      content
    }
  });