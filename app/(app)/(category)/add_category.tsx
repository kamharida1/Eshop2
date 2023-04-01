import { Text, View } from "@bacons/react-views";
import { Stack } from "expo-router";

export default function AddCategory() {
  return (
    <>
      <Stack.Screen
        options={{
          title: "Add Category",
        }}
      />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text> Add Category screen </Text>
      </View>
    </>
  );
}
