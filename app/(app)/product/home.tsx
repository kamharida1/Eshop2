import { Text, View } from "@bacons/react-views";
import { LinkButton } from "../../../etc/link_button";

export default function Home() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text> Home Screen </Text>
      <LinkButton
        link="/product/edit"
        style={{marginVertical: 16}}
      >
        Edit
      </LinkButton>
      <LinkButton
        link="/product/detail"
        style={{marginVertical: 16}}
      >
        Product Detail
      </LinkButton>
    </View>
  )
}