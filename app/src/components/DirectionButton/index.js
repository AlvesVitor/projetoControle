import React from "react";
import { TouchableOpacity } from "react-native";
import service from "../../service";

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { styles } from "./styles";

export default function DirectionButton({ data }) {
    const { color, icon, size, value } = data;

    return (
        <TouchableOpacity
            onPressIn={() => service.sendKeyboard(1, value)}
            onPressOut={() => service.sendKeyboard(2, value)}
            style={styles.container}>
            <MaterialCommunityIcons name={icon} size={size} color={color} />
        </TouchableOpacity>
    )
}
