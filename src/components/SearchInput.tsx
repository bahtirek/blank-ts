import { View, Text, TextInput, TouchableOpacity, Image, TextInputProps, Alert } from 'react-native'
import React, { useState } from 'react'
import icons from '@constants/icons';
import { FormFieldType } from 'src/types';
import { router, usePathname } from 'expo-router';

const SearchInput = () => {
  const [showPassword, setShowPassword] = useState(false);
  const pathname = usePathname();
  const [query, setQuery] = useState('')
  
  return (
    <View className="flex flex-row items-center space-x-4 w-full relative">
      <TextInput
        className="text-base mt-0.5 text-gray flex-1 font-pregular h-12 pl-4 pr-12 rounded-2xl border border-gray-400 focus:border-secondary"
        value={query}
        placeholder={'Search for perfect gift place'}
        placeholderTextColor="#878793"
        onChangeText={(e) => setQuery(e)}
      />

      <TouchableOpacity
        onPress={() => {
          if(!query) {
            return Alert.alert('Missing query', "Please input something to search results across database")
          }

          if(pathname.startsWith('/search')) router.setParams({query})
            else router.push(`/search/${query}`)
        }}
        className='absolute right-4'
      >
        <Image 
          source={icons.search}
          className='w-5 h-5'
          resizeMode='contain'
        />
      </TouchableOpacity>
    </View>
  )
}

export default SearchInput