import { Text, View, TextInput, Button, FlatList, TouchableOpacity } from "react-native";
import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import todosData from "@/data/todo";

export default function Index() {
  const [todos, setTodos] = useState(todosData);
  const [text, setText] = useState("");
  const [description, setDescription] = useState("");

  const { theme, toggleTheme } = useTheme();

  const isDarkMode = theme === "dark";

  const addTodo = () => {
    if (text.trim() && description.trim()) {
      const newId = todos.length > 0 ? Math.max(...todos.map((todo) => parseInt(todo.id))) + 1 : 1;
      const newTodo = { id: newId.toString(), title: text, description, completed: false };
      setTodos([newTodo, ...todos]);
      setText("");
      setDescription("");
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: isDarkMode ? "#121212" : "#FFFFFF",
        padding: 16,
      }}
    >
      <TouchableOpacity onPress={toggleTheme} style={{ marginBottom: 16 }}>
        <Text style={{ color: isDarkMode ? "#FFFFFF" : "#000000", textAlign: "center" }}>
          Switch to {isDarkMode ? "Light" : "Dark"} Mode
        </Text>
      </TouchableOpacity>

      <View style={{ marginBottom: 16 }}>
        <TextInput
          value={text}
          onChangeText={setText}
          placeholder="Title"
          placeholderTextColor={isDarkMode ? "#AAAAAA" : "#666666"}
          style={{
            borderWidth: 1,
            borderColor: isDarkMode ? "#FFFFFF" : "#000000",
            color: isDarkMode ? "#FFFFFF" : "#000000",
            padding: 8,
            borderRadius: 4,
            marginBottom: 8,
          }}
        />
        <TextInput
          value={description}
          onChangeText={setDescription}
          placeholder="Description"
          placeholderTextColor={isDarkMode ? "#AAAAAA" : "#666666"}
          style={{
            borderWidth: 1,
            borderColor: isDarkMode ? "#FFFFFF" : "#000000",
            color: isDarkMode ? "#FFFFFF" : "#000000",
            padding: 8,
            borderRadius: 4,
          }}
        />
        <Button title="Add Todo" onPress={addTodo} />
      </View>

      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              padding: 16,
              borderBottomWidth: 1,
              borderBottomColor: isDarkMode ? "#444444" : "#CCCCCC",
            }}
          >
            <Text style={{ color: isDarkMode ? "#FFFFFF" : "#000000", fontWeight: "bold" }}>
              {item.title}
            </Text>
            <Text style={{ color: isDarkMode ? "#DDDDDD" : "#333333" }}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
}
