import React, { useContext } from "react";
import { View, FlatList, TouchableOpacity, Text } from "react-native";
import OptionSettings from "../../components/OptionSettings";
import { Context } from "../../context";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { styles } from "./styles";

export default function Settings() {
  const { buttons, configSave } = useContext(Context);

  return (
    <View style={styles.container}>
      <FlatList
        data={buttons}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <OptionSettings data={item} index={index} />
        )}
      />
      <View style={styles.areaSave}>
        <TouchableOpacity style={styles.button} onPress={configSave}>
          <Text style={styles.text}>Salvar</Text>
          <MaterialCommunityIcons name="check-bold" color="green" size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
