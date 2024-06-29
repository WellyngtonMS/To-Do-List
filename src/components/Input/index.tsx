import { TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";

import IconAdd from "../../assets/icons/icon-add.svg";
import { InputCreate } from "../../@types/types";

export function Input({ value, setValue, onClick }: InputCreate) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.form}>
      <TextInput
        style={[styles.input, isFocused && styles.inputFocus]}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#808080"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        value={value}
        onChangeText={setValue}
      />
      <TouchableOpacity style={styles.button} onPress={onClick}>
        <IconAdd width={20} height={20} />
      </TouchableOpacity>
    </View>
  );
}
