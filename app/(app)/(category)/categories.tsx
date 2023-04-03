import { Box, Text } from "../../../etc/_Theme";
import { Screen } from "../../../etc/views/screen";
import { useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import { DataStore } from "aws-amplify";
import { Category } from "../../../src/models";
import CategoryCard from "../../../etc/cards/category_card";
import { Space } from "../../../etc/space/re_space";
import { onScreen } from "../../../constants";
import { FlatList } from "react-native";

export default function Categories() {
  const navigation = useNavigation();
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    const cats = await DataStore.query(Category)
    setCategories(cats as any)
  }

  useEffect(() => {
    fetchCategories()
    const subscription =
      DataStore.observe(Category).subscribe(() => fetchCategories());
    return () => {
      subscription.unsubscribe()
    }
  }, [categories])

  const _renderItem = ({ item }) => {
    // const owner = Auth.user.attributes.sub
    // const check = owner === item.owner
    return (
      <>
        <CategoryCard obj={item} onPress={onScreen("add_category", navigation, item)} />
        <Space height={20} />
      </>
    )
  }

  const _keyExtractor = (obj) => obj.id.toString();

  return (
    <>
      <Screen>
        <FlatList
          contentInsetAdjustmentBehavior="automatic"
          scrollEventThrottle={16}
          data={categories}
          renderItem={_renderItem}
          keyExtractor={_keyExtractor}
          onEndReachedThreshold={0.5}
          //stickyHeaderIndices={[0]}
          stickyHeaderHiddenOnScroll
        />
      </Screen>
    </>
  );
}

