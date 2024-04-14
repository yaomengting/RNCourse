import React, { useState } from 'react'
import { Button, StyleSheet, View, TextInput } from 'react-native';
export default function TodoInput({ onAddTodo }) {
  const [todoText, setTodoText] = useState('');

  function todoInputHandler(todoText) {
    setTodoText(todoText);
  }

  function handleAddButton() {
    onAddTodo(todoText);
    setTodoText('')
  }


  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder='what should be done?'
        onChangeText={todoInputHandler} />
      <Button title='Add To do' onPress={handleAddButton} />
    </View>
  )
}
const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc"
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8
  },
})