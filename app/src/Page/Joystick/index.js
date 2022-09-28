import React, { useContext } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import Button from "../../components/Button";
import DirectionButton from "../../components/DirectionButton";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { Context } from "../../context";
import { styles } from "./styles";

export default function Joystick() {
  const { buttons, loading } = useContext(Context);
  const navigation = useNavigation();

  return !loading ? (
    <View style={styles.container}>
      <View style={styles.containerButton}>
        <View style={styles.a}>
          <DirectionButton data={buttons[0]} />
        </View>
        <View style={styles.b}>
          <DirectionButton data={buttons[1]} />
          <DirectionButton data={buttons[2]} />
        </View>
        <View style={styles.c}>
          <DirectionButton data={buttons[3]} />
        </View>
      </View>

      <View style={styles.containerMenu}>
        <View style={[styles.Menu, { alignItems: "flex-end" }]}>
          <Button data={buttons[8]} />
          <View style={{ height: 50 }} />
          <Button data={buttons[9]} />
        </View>
        <View style={[styles.Menu, { alignItems: "flex-start" }]}>
          <TouchableOpacity
            style={styles.figure}
            onPress={() => navigation.navigate("Settings")}
          >
            <MaterialCommunityIcons name="robot" size={30} color="#353839" />
            <Text>Controls</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.containerButton}>
        <View style={styles.a}>
          <Button data={buttons[4]} background />
        </View>
        <View style={styles.b}>
          <Button data={buttons[5]} background />
          <Button data={buttons[6]} background />
        </View>
        <View style={styles.c}>
          <Button data={buttons[7]} background />
        </View>
      </View>
    </View>
  ) : (
    <View style={styles.container}>
      <ActivityIndicator color="#000" size={40} />
    </View>
  );
}
