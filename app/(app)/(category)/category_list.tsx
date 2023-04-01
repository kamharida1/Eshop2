import { Pressable, Text, View } from "@bacons/react-views";
import { Link, Stack } from "expo-router";
import { LinkButton } from "../../../etc/link_button";
import { FontAwesome } from '@expo/vector-icons'
import CategoryAPI from "../../../src/features/category/categoryAPI";

export default function CategoryList() {
  return (
    <>
      <Stack.Screen
        options={{
          title: "Category",
          headerRight: AddCategorybutton,
        }}
      />
      <View style={{ flex: 1, padding: 15, paddingTop: 180 }}>
        {/* <Text> Category Screen </Text>
        <LinkButton
          link="/(category)/add_category"
          style={{ marginVertical: 16 }}
        >
          Add Category
        </LinkButton> */}
        <CategoryAPI />
      </View>
    </>
  );
};

function AddCategorybutton() {
  //const { signOut } = useAuth();
  return (
    <Link
      href="/category/add_category"
      onPress={(ev) => {
        ev.preventDefault();
        //signOut();
      }}
      asChild
    >
      <Pressable
        style={{
          flexDirection: "row",
          display: "flex",
          alignItems: "center",
          paddingRight: 8,
        }}
      >
        <Text
          style={{
            fontWeight: "normal",
            paddingHorizontal: 8,
            fontSize: 16,
          }}
        >
          Add Category
        </Text>
        <FontAwesome name="sign-out" size={24} color="black" />
      </Pressable>
    </Link>
  );
}


