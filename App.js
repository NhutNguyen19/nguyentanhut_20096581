import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import UseEffect from "./src/components/UseEffect";
//import UseState from "./src/components/UseState";

export default function App() {
  return (
    <View style={styles.container}>
      <UseEffect />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
