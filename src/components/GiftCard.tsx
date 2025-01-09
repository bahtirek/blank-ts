import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import { GiftCardType } from 'src/types';
import icons from '@constants/icons';

type GiftCardPropType = {
  giftCard: GiftCardType
}

const GiftCard = ({giftCard}: GiftCardPropType) => {
  const {label, thumbnail, description} = giftCard;
  console.log(label, thumbnail, description);
  

  return (
    <View className='flex flex-col items-center px-4 mb-4'>
        <TouchableOpacity
          activeOpacity={0.7}
          className='mt-3 relative w-full'
        >
          <View className=''>
            <Image 
              source={{uri: thumbnail}}
              className='w-full h-40 rounded-2xl'
              resizeMode='cover'
            />
            <View className=' flex-1 py-2 px-4 gap-y-1'>
              <Text className='text-sm text-orange-500 font-psemibold'>Rest name</Text>
              <Text className='text-xs text-gray-800 font-pregular' numberOfLines={1}>123 Tralivali kuchasi, Yunus obod tumani</Text>
              <Text className='text-xs text-gray-500 font-pregular' numberOfLines={2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat provident excepturi explicabo eum fugit blanditiis quae accusantium dolores omnis autem dignissimos consectetur eligendi possimus dolorum error, voluptatum facere. Minus, veniam?</Text>
            </View>

          </View>
        </TouchableOpacity>
    </View>
  )
}

export default GiftCard