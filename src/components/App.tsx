import React from 'react';
import Label from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { Todo, fetchTodos, deleteTodo } from '../actions';
import { StoreState } from '../reducers';
import Button from '@material-ui/core/Button';
interface AppProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}
export class _App extends React.Component<AppProps> {
  onButtonClick = (): void => {
    this.props.fetchTodos();
  };
  onTodoClick = (id: number): void => {
    this.props.deleteTodo(id);
  };
  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: Todo) => {
      return (
        <div>
          <Label>{todo.id}</Label>
          <Label onClick={() => this.onTodoClick(todo.id)} key={todo.id}>
            {todo.title}
          </Label>
        </div>
      );
    });
  }
  render() {
    return (
      <div>
        <Button variant="outlined" color="primary" onClick={this.onButtonClick}>
          Fetch
        </Button>
        <br />
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = (state: StoreState): { todos: Todo[] } => {
  return { todos: state.todos };
};

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);
