import { FetchTodosAction, DeleteTodosAction } from './index';
export enum ActionTypes {
  fetchTodos,
  deleteTodo
}
export type Action = FetchTodosAction | DeleteTodosAction;
