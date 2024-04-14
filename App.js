import { useState } from 'react';
import { StyleSheet, View, } from 'react-native';
import { registerRootComponent } from 'expo';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
export default function App() {
  const [todoList, setTodoList] = useState([])
  function addTodoHandler(todoText) {
    setTodoList((prevTodoList) =>
      [...prevTodoList, { key: Math.random().toString(), text: todoText }])
  }

  function deleteTodoHandler(key) {
    setTodoList((prevTodoList) => prevTodoList.filter(todo => todo.key !== key))
  }
  return (
    <View style={styles.appContainer}>
      <TodoInput onAddTodo={addTodoHandler} />
      <TodoList todoList={todoList} onDeleteTodo={deleteTodoHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16
  },

  todoContainer: {
    flex: 5
  },

});

registerRootComponent(App);