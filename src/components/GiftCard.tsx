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
    <View className='flex flex-col items-center px-4 mb-14'>
        <TouchableOpacity
          activeOpacity={0.7}
          className='h-60 rounded-xl mt-3 relative justify-center items-center w-full'
        >
          <Image 
            source={{uri: thumbnail}}
            className='w-full h-full rounded-lg mt-3'
            resizeMode='cover'
          />
          <Image 
            source={icons.play}
            className='w-12 h-12 absolute'
            resizeMode='cover'
          />
        </TouchableOpacity>
    </View>
  )
}

export default GiftCard