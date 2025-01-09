import { View, Text, FlatList, TouchableOpacity, Image, ImageBackground, Button, StyleSheet } from 'react-native'
import React, { useRef, useState } from 'react'
import { VideoCardType } from 'src/types'

type VideoCardPropType = {
  categories: VideoCardType[]
}

type CategoryItemPropType = {
  activeItem: string,
  item: VideoCardType,
}

const CategoryItem = ({activeItem, item}: CategoryItemPropType) => {
const [category, setCategory] = useState(''); 

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => setCategory(item.$id)}
      className='relative justify-center items-center'
    >
      <View className=' p-3 m-1 rounded-[20px]'>
        <ImageBackground 
          source={{uri: item.icon}}
          className='w-10 h-10 overflow-hidden'
          resizeMode='cover'
        />
      </View>
      <Text className='text-xs font-pregular text-gray-600'>{item.label}</Text>
    </TouchableOpacity>
  )
}

const CategoryList = ({categories}: VideoCardPropType) => {
  const [activeItem, setActiveItem] = useState<string>(categories[0]?.$id);

  return (
    <FlatList 
      data={categories}
      keyExtractor={(item) => item.$id}
      renderItem={({item}) => (
        <CategoryItem activeItem={activeItem} item={item} />
      )}
      horizontal
      className='pb-2'
    />
  )
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
}
});

export default CategoryList