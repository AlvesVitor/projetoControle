import React from "react";
import { StyleSheet } from "react-native";

import { Picker } from "@react-native-picker/picker";

export default function PickerComponent({ data, value, setValue }) {
  return (
    <Picker
      style={styles.container}
      selectedValue={value}
      dropdownIconColor="rgb(34, 34, 34)"
      itemValue={data}
      onValueChange={(itemValue) => setValue(itemValue)}
    >
      {data.map((item, index) => (
        <Picker.Item key={index} label={item.label} value={item.value} />
      ))}
    </Picker>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "#fff",
  },
});
