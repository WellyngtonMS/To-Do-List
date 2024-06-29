import { FlatList, Text, View } from "react-native";
import { styles } from "./styles";

import { ListItem } from "../ListItem";
import { TodoListType } from "../../@types/types";

import IconEmpty from "../../assets/icons/icon-empty.svg";

export function List({ toDos, setTodos }: TodoListType) {

  return (
    <View style={styles.listContainer}>
      <View style={styles.listItem}>
        <View style={styles.listItemContainer}>
          <Text style={[styles.listItemText, { color: "#4EA8DE" }]}>
            Criadas
          </Text>
          <View style={styles.listItemNumber}>
            <Text style={styles.listItemNumberText}>{toDos.length}</Text>
          </View>
        </View>
        <View style={styles.listItemContainer}>
          <Text style={[styles.listItemText, { color: "#8284FA" }]}>
            Concluídas
          </Text>
          <View style={styles.listItemNumber}>
            <Text style={styles.listItemNumberText}>{toDos.filter(item => item.status).length}</Text>
          </View>
        </View>
      </View>

      <View style={{ marginTop: 20, flex: 1 }}>
        <FlatList
          data={toDos}
          renderItem={({ item }) => (
            <ListItem todo={item} setTodo={setTodos} key={item.id} />
          )}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <View style={styles.listEmpty}>
              <IconEmpty width={56} height={56} />
              <View>
                <Text style={styles.tituloBoldEmpty}>
                  Você ainda não tem tarefas cadastradas
                </Text>
                <Text style={styles.tituloNormalEmpty}>
                  Crie tarefas e organize seus itens a fazer
                </Text>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
}
