import { Alert, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

import { ItemType } from "../../@types/types";
import IconCheck from "../../assets/icons/icon-check.svg";
import IconDelete from "../../assets/icons/icon-delete.svg";

export function ListItem({ todo, setTodo }: ItemType) {
  function handleChangeTodoStatus(id: string) {
    return setTodo(prevItems => {
      return prevItems.map(item => {
        if (item.id === id) {
          return {
            ...item,
            status: !item.status,
          };
        }
        return item;
      });
    });
  }

  function handleDeleteTodo(id: string) {
    return Alert.alert(
      "Excluir tarefa",
      "Você tem certeza que deseja excluir esta tarefa?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Excluir",
          onPress: () => {
            setTodo(prevItems => {
              return prevItems.filter(item => item.id !== id);
            });
          },
          style: "destructive",
        },
      ],
      { cancelable: true }
    );
  }

  return (
    <View style={styles.item}>
      <TouchableOpacity
        style={todo.status ? {} : styles.outterRadio}
        onPress={() => handleChangeTodoStatus(todo.id)}
      >
        {todo.status ? (
          <View style={styles.checked}>
            <IconCheck width={18} height={18} />
          </View>
        ) : (
          <View />
        )}
      </TouchableOpacity>
      <ScrollView>
        <Text
          style={[
            styles.textItem,
            todo.status
              ? { textDecorationLine: "line-through", color: "#808080" }
              : {},
          ]}
        >
          {todo.text}
        </Text>
      </ScrollView>
      <TouchableOpacity onPress={() => handleDeleteTodo(todo.id)}>
        <IconDelete width={18} height={18} />
      </TouchableOpacity>
    </View>
  );
}
