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
        keyExtractor={item => item.key.toString()} 
        alwaysBounceHorizontal={false}
        contentContainerStyle={styles.listContent} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 8
  },
  listContent: {
    paddingBottom: 8
  }
});

export default TodoList;