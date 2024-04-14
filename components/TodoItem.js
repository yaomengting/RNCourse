import { StyleSheet, View, Text, Button } from "react-native";

function TodoItem({ todo, onDeleteTodo }) {

  return (
    <View style={styles.todoItem} >
      <Text style={styles.todoText}>{todo.text}</Text>
      <Button title="Delete" color="#ff5c5c" onPress={onDeleteTodo} />
    </View>
  )
};

export default TodoItem;

const styles = StyleSheet.create({
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 8,
    borderRadius: 6,
  },
  todoText: {
    flex: 1,
    fontSize: 18
  }
})