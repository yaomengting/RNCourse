import { StyleSheet } from "react-native";
import { Card, Button, Paragraph } from 'react-native-paper';
function TodoItem({ todo, onDeleteTodo }) {

  return (
    <Card style={styles.todoItem} >
      <Card.Content style={styles.cardContent}>
      <Paragraph style={styles.todoText}>{todo.text}</Paragraph>
      <Button 
          icon="delete" 
          mode="contained" 
          onPress={onDeleteTodo} 
          color="#ff5c5c"
          style={styles.deleteButton}>
          Delete
        </Button>
      </Card.Content>
    </Card>
  )
};

export default TodoItem;

const styles = StyleSheet.create({
  todoItem: {
    margin: 8,
    borderRadius: 6,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    padding: 8,
  },
  todoText: {
    flex: 1,
    fontSize: 16, 
    marginRight: 10
  },
})