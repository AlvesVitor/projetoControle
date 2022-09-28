import React, { useState, useEffect, useContext } from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Picker from "../Picker";
import { keyboards } from "../../Object";
import { Context } from "../../context";

import { styles } from "./styles";

export default function OptionSettings({ data, index }) {
  const { icon, color, size, value } = data;
  const { updateValue } = useContext(Context);
  const [newValue, setNewValue] = useState(value);

  useEffect(() => {
    updateValue(newValue, index);
  }, [newValue]);

  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name={icon} color={color} size={size} />
      <Picker value={newValue} setValue={setNewValue} data={keyboards} />
    </View>
  );
}
