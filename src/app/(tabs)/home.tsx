import { View, Text, FlatList, Image, RefreshControl, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '@constants/images'
import SearchInput from '@components/SearchInput'
import CategoryList from '@components/CategoryList'
import EmptyState from '@components/common/EmptyState'
import { getAllPosts, getLatestPosts } from 'lib/appwrite'
import useAppwrite from 'lib/useAppwrite'
import { VideoCardType } from 'src/types'
import icons from '@constants/icons'
import GiftCard from '@components/GiftCard'

const Home = () => {

  const [refreshing, setRefreshing] = useState(false);

  const {data: posts, refetch} = useAppwrite<VideoCardType[]>(getAllPosts);
  const {data: latestPosts} = useAppwrite<VideoCardType[]>(getLatestPosts);
  
  const onRefresh = async() => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false)
  }
  return (
    <SafeAreaView className='h-full bg-white'>
      <FlatList 
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({item}) => (
          <GiftCard giftCard={item} />
        )}
        ListHeaderComponent={() => (
          <View className='mt-6 px-4 space-y-6'>
            <View className='justify-between items-center flex-row mb-6'>
              <View className=''>
                {/* <Text className='text-xs font-pregular text-gray-600'>Unwrap Joy, Anytime, Anywhere!</Text> */}
                <Text className='text-xs font-pregular text-gray-600'>Your One-Stop Gift Card Shop!</Text>
                <Text className='text-2xl font-psemibold text-orange-500'>GiftCard Genie</Text>
              </View>
              <View>
                <Image 
                  source={icons.giftcard}
                  className='w-20 h-14'
                  resizeMode='contain'
                />
              </View>
            </View>

            <SearchInput />


            <View className='w-full flex-1'>
              <CategoryList categories={latestPosts}/>

              <Text className='text-orange-500 text-lg font-pregular mt-7'>Trending</Text>
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title='No Videos Found'
            subtitle='Be the first obe to upload the video'
          />
        )}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
      />
    </SafeAreaView>
  )
}

export default Home