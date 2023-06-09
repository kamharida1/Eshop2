import { Link, Stack, useRouter } from "expo-router";
import { Platform, Pressable } from "react-native";
import { Box, Text } from "../../../etc/_Theme";
import { FontAwesome } from "@expo/vector-icons";

export const unstable_settings = {
  initialRouteName: "products",
};

export default function BrandLayout() {
  const router = useRouter();

  return (
    <Stack screenOptions={{}}>
      <Stack.Screen
        name="brands"
        options={{
          title: "Brands",
          headerLargeTitle: true,
          headerRight: AddBrandButton,
          headerSearchBarOptions: {
            onChangeText: (event) => {
              // Update the query params to match the search query.
              router.setParams({
                q: event.nativeEvent.text,
              });
            },
          },
        }}
      />
      <Stack.Screen
        name="add_brand"
        options={{
          title: "Add Brand",
          presentation: "modal",
          headerRight: Platform.select({
            ios: DismissComposeButton,
          }),
        }}
      />
    </Stack>
  );
}

function AddBrandButton() {
  const router = useRouter();
  return (
    <Pressable
      style={{
        flexDirection: "row",
        display: "flex",
        alignItems: "center",
        paddingRight: 8,
      }}
      onPress={() => router.push("/add_brand")}
    >
      <Text variant="body"> Add Brand </Text>
      <FontAwesome name="sign-out" size={24} color="black" />
    </Pressable>
  );
}

function DismissComposeButton() {
  return (
    <Link href="..">
      <Text
        style={{
          fontWeight: "normal",
          paddingHorizontal: 8,
          fontSize: 16,
        }}
      >
        Back
      </Text>
    </Link>
  );
}
