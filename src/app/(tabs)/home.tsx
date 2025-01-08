import { View, Text, FlatList, Image, RefreshControl, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '@constants/images'
import SearchInput from '@components/SearchInput'
import CategoryList from '@components/CategoryList'
import EmptyState from '@components/common/EmptyState'
import { getAllPosts, getLatestPosts } from 'lib/appwrite'
import useAppwrite from 'lib/useAppwrite'
import VideoCard from '@components/VideoCard'
import { VideoCardType } from 'src/types'

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
          <VideoCard videoCard={item} />
        )}
        ListHeaderComponent={() => (
          <View className='my-6 px-4 space-y-6'>
            <View className='justify-between items-center flex-row mb-6'>
              <View className=''>
                {/* <Text className='text-xs font-pregular text-gray-600'>Unwrap Joy, Anytime, Anywhere!</Text> */}
                <Text className='text-xs font-pregular text-gray-600'>Your One-Stop Gift Card Shop!</Text>
                <Text className='text-2xl font-psemibold text-red-600'>GiftCard Genie</Text>
              </View>
              <View>
                <Image 
                  source={images.logo}
                  className='w-20 h-10'
                  resizeMode='contain'
                />
              </View>
            </View>

            <SearchInput />


            <View className='w-full flex-1'>
              {/* <Text className='text-gray-100 text-lg font-pregular mb-3'>Latest videos</Text> */}

              <CategoryList categories={latestPosts}/>
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