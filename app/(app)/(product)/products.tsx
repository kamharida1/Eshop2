import { Stack, useRouter } from "expo-router";
import { BorderlessButton } from "react-native-gesture-handler";
import { LinkButton } from "../../../etc/buttons/link_button";
import { ReButton } from "../../../etc/buttons/re_button";
import { Screen } from "../../../etc/views/screen";
import { Box, Text } from "../../../etc/_Theme";

export default function Product() {
  const router = useRouter();

  return (
    // <Stack.Screen options={{ title: "Products" }} />
    // <Screen scroll>
    //   <Box flex={1} pt="l" pr="l" pl="l">
    //     <Text variant="subheader"> Home Screen </Text>
    //     <BorderlessButton onPress={() => router.push("/product/edit")}>
    //       <ReButton
    //         variant="primary"
    //         label="Edit"
    //         onPress={()=>router.push("/product/edit")}
    //       />
    //     </BorderlessButton>
    //     <LinkButton link="/product/detail" style={{ marginVertical: 16 }}>
    //       Product Detail
    //     </LinkButton>
    //   </Box>
    // </Screen>
    <>
      {/* <Stack.Screen options={{ title: "Products" }} /> */}
      <Screen scroll>
        <Box flex={1} pr="s" pl="s" pt="s">
          <Text>Hello World</Text>
        </Box>
      </Screen>
    </>
  );
}
