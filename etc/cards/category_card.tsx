import React, { memo } from 'react'
import { Image, Pressable } from 'react-native';
import { Card, Text } from '../_Theme';

interface CategoryT {
  obj: {
    name: string;
    description: string;
    image: string;
  }
  onPress: () => void
}

const CategoryCard = memo(({ obj, onPress, }: CategoryT) => {
  const { name, description, image} = obj
  return (
    <Pressable onPress={onPress}>
      <Card padding="l" margin="s" variant="elevated">
        <Text variant="body">{name}</Text>
        <Text variant="body">{description}</Text>
        <Image source={{uri: image}} style={{ width: 80, height: 80, resizeMode: 'cover'}} />
      </Card>
    </Pressable>
  );
})

export default CategoryCard;
