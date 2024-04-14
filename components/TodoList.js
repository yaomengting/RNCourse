import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import TodoItem from './TodoItem';

function TodoList({ todoList, onDeleteTodo }) {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={todoList}
        renderItem={({ item }) => (
          <TodoItem
            todo={item}
            onDeleteTodo={() => onDeleteTodo(item.key)}
          />
        )}
        alwaysBounceHorizontal={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 5
  }
});

export default TodoList;