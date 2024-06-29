import { useState } from "react";
import { View } from "react-native";
import { styles } from "./styles";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { List } from "../../components/List";

import { TodoType } from "../../@types/types";

export function Home() {
  const [toDos, setTodos] = useState<TodoType[]>([]);
  const [text, setText] = useState("");

  function handleCreateTodo() {
    if (text === "" || text.trim() === "") {
      return;
    }
    const newItem = {
      id: Math.random().toString(),
      text,
      status: false,
    };
    setTodos(prevItems => [...prevItems, newItem]);
    setText("");
  }

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.content}>
        <Input value={text} setValue={setText} onClick={handleCreateTodo} />
        <List toDos={toDos} setTodos={setTodos} />
      </View>
    </View>
  );
}
