import React from "react";
import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import service from "../../service";

import { styles } from "./styles";

export default function Button({ data, background }) {
  const { color, icon, size, value } = data;

  return (
    <TouchableOpacity
      onPress={() => service.sendKeyboard(0, value)}
      style={[
        styles.container,
        { backgroundColor: background ? "#353839" : "#fff" },
      ]}
    >
      <MaterialCommunityIcons name={icon} size={size} color={color} />
    </TouchableOpacity>
  );
}
