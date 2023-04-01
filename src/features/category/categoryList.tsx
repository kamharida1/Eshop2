import { StyleSheet, Text, View } from "react-native";
import React from "react";
import _ from "lodash";
import CategoryListItem from './categoryListItem'


const CategoryList = (props) => {
  
  const renderItems = () => {
    const categoryListProps = _.omit(props, "categories");
    return _.map(props.categories, (category, index) => (
      <CategoryListItem key={index} {...category} {...categoryListProps} />
    ));
  };
  return <View>{renderItems()}</View>;
};

export default CategoryList;

const styles = StyleSheet.create({});
