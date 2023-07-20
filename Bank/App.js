import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './Components/header';
import TodoItem from './Components/Todoitem';
import AddTodos from './Components/addtodos';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'drink water', key: '2' },
    { text: 'Work out', key: '3' }
  ]);

  const pressdelete = (key) => {
    setTodos((previoustodos) => {
      return previoustodos.filter((todo) => todo.key !== key);
    });
  };

  const submitHandler = (text) => {
    setTodos((previoustodos) => {
      return [
        { text: text, key: Math.random().toString() },
        ...previoustodos
      ];
    });
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodos submitHandler={submitHandler} />
        <View styles={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} pressdelete={pressdelete} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    padding: 40
  },
  list: {
    marginTop: 20
  }
});
