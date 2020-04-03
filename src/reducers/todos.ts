import { Todo, ActionTypes, Action } from './../actions';
export const todosReducer = (state: Todo[] = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    case ActionTypes.deleteTodo:
      return state.filter((todo: Todo) => todo.id !== action.paylaod);
    default:
      return state;
  }
};
