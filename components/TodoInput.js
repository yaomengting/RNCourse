import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';
import { TextInput } from 'react-native-paper';
export default function TodoInput({ onAddTodo }) {
  const [todoText, setTodoText] = useState('');

  function todoInputHandler(todoText) {
    setTodoText(todoText);
  }

  function handleAddButton() {
    if(todoText.trim() !== ''){
      onAddTodo(todoText);
      setTodoText('')
    }
    
  }


  return (
    <View style={styles.inputContainer}>
      <TextInput
        mode='outlined'
        style={styles.textInput}
        value={todoText}
        label='what should be done?'
        theme={{ roundness: 10 }} 
        onChangeText={todoInputHandler} />
      <Button
        onPress={handleAddButton}
        mode='contained'
        style={styles.button}
         >
        Add To do
      </Button>
    </View>
  )
}
const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10
  },
  textInput: {
    flex: 1,
    marginRight: 8,
  },
})