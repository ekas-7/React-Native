import React, { useEffect, useState } from 'react';
import { 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  FlatList, 
  StyleSheet,
  Alert,
  ListRenderItem 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import todosdata from '@/data/todo';

interface Todo {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}


export default function TodoApp(): JSX.Element {
  const [todos, setTodos] = useState<Todo[]>(
    todosdata.sort((a, b) => parseInt(b.id) - parseInt(a.id))
  );
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');

  const addTodo = (): void => {
    if (!newTitle.trim()) {
      Alert.alert('Error', 'Please enter a title');
      return;
    }
    
    const newTodo: Todo = {
      id: (todos.length + 100).toString(),
      title: newTitle,
      description: newDescription,
      completed: false
    };
    setTodos([newTodo,...todos]);
    setNewTitle('');
    setNewDescription('');
  };

  const toggleComplete = (id: string): void => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: string): void => {
    Alert.alert(
      'Delete Todo',
      'Are you sure you want to delete this todo?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', onPress: () => setTodos(todos.filter(todo => todo.id !== id)) }
      ]
    );
  };

  const renderTodoItem: ListRenderItem<Todo> = ({ item }) => (
    <View style={[styles.todoItem, item.completed && styles.completedTodo]}>
      <View style={styles.todoContent}>
        <Text style={[styles.todoTitle, item.completed && styles.completedText]}>
          {item.title}
        </Text>
        <Text style={[styles.todoDescription, item.completed && styles.completedText]}>
          {item.description}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={[styles.button, styles.completeButton]} 
          onPress={() => toggleComplete(item.id)}
        >
          <Text style={styles.buttonText}>
            {item.completed ? '✗' : '✓'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.button, styles.deleteButton]} 
          onPress={() => deleteTodo(item.id)}
        >
          <Text style={styles.buttonText}>🗑</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Todo List</Text>
      
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Todo title"
          value={newTitle}
          onChangeText={setNewTitle}
        />
        <TextInput
          style={styles.input}
          placeholder="Description"
          value={newDescription}
          onChangeText={setNewDescription}
        />
        <TouchableOpacity style={styles.addButton} onPress={addTodo}>
          <Text style={styles.addButtonText}>Add Todo</Text>
        </TouchableOpacity>
      </View>

      <FlatList<Todo>
        data={todos}
        renderItem={renderTodoItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  list: {
    flex: 1,
  },
  todoItem: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  completedTodo: {
    backgroundColor: '#e8e8e8',
  },
  todoContent: {
    flex: 1,
  },
  todoTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  todoDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  button: {
    padding: 8,
    borderRadius: 4,
    marginLeft: 8,
  },
  completeButton: {
    backgroundColor: '#4CD964',
  },
  deleteButton: {
    backgroundColor: '#FF3B30',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  }
});