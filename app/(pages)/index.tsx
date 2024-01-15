import { StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";
import { Stack } from "expo-router";

export default function ConverterCurrency() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      {/* card centralized with two inputs one below the other */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
