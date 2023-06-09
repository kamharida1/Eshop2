import { fetchCategories, selectAllCategories } from "./categorySlice";
import CategoryCard from "../../../etc/cards/category_card";
import { Space } from "../../../etc/space/re_space";
import { useRouter, useSearchParams } from "expo-router";
import { FlatList } from "react-native";
import { useEffect, useMemo } from "react";
// import CATEGORIES from "../../../data/categories";

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../../../src/store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default function  CategoryList(){
  const categories = useQueriedCategories();
  const catStatus = useAppSelector((state) => state.categories.status);

  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    if (catStatus === "idle") {
      dispatch(fetchCategories());
    }
  }, [catStatus, dispatch]);

  function useQueriedCategories() {
    const categories = useAppSelector(selectAllCategories)

    const { q } = useSearchParams<{ q: string }>();

    return useMemo(
      () =>
        categories.filter((item) => {
          if (!q) {
            return true;
          }
          return item.name.toLowerCase().includes(q?.toLowerCase());
        }),
      [q, categories]
    );
  }

  const _renderItem = ({ item }) => {
    return (
      <>
        <CategoryCard
          obj={item}
          onPress={() =>
            router.push({
              pathname: "/category/[id]",
              params: { id: item.id },
            })
          }
        />
      </>
    );
  };

  const _keyExtractor = (obj) => obj.id.toString();

  return (
    <FlatList
      contentInsetAdjustmentBehavior="automatic"
      scrollEventThrottle={16}
      data={categories}
      renderItem={_renderItem}
      keyExtractor={_keyExtractor}
      onEndReachedThreshold={0.5}
      //stickyHeaderIndices={[0]}
      stickyHeaderHiddenOnScroll
      contentContainerStyle={{ marginTop: 14 }}
    />
  );
}