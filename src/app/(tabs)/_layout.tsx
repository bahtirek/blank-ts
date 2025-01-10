import { View, Text, Image, ColorValue } from 'react-native'
import { Tabs } from 'expo-router'

import  { icons }  from '../../../constants'

const TabIcon = ({icon, color, name, focused}: {icon: object, color: ColorValue, name: string, focused: boolean}) => {
  return (
    <View className='items-center justify-center gap-2'>
      <Image 
      source={icon} 
      resizeMode='contain' 
      tintColor={color}
      className='"w-6 h-6'
    />
    {/* <Text 
      className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`}
      style={{color: color}}
    >
      {name}
    </Text> */}
    </View>
  )
}

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#FFA001',
          tabBarInactiveTintColor: '#6b7280',
          tabBarStyle: {
            height: 60,
            backgroundColor: '#ffffff',
            borderTopWidth: 1,
            borderTopColor: '#bcc0c7'
          }
        }}
      >
        <Tabs.Screen
          name='home'
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({color, focused}) => (
              <TabIcon 
                icon={icons.home}
                color={color}
                name='Home'
                focused={focused}
                
              />
            )
          }}
        />
        <Tabs.Screen
          name='bookmark'
          options={{
            title: 'Bookmark',
            headerShown: false,
            tabBarIcon: ({color, focused}) => (
              <TabIcon 
                icon={icons.bookmark}
                color={color}
                name='Bookmark'
                focused={focused}
              />
            )
          }}
        />
        <Tabs.Screen
          name='basket'
          options={{
            title: 'Basket',
            headerShown: false,
            tabBarIcon: ({color, focused}) => (
              <TabIcon 
                icon={icons.basket}
                color={color}
                name='Basket'
                focused={focused}
              />
            )
          }}
        />
        <Tabs.Screen
          name='profile'
          options={{
            title: 'Profile',
            headerShown: false,
            tabBarIcon: ({color, focused}) => (
              <TabIcon 
                icon={icons.profile}
                color={color}
                name='Profile'
                focused={focused}
              />
            )
          }}
        />
      </Tabs>
    </>
  )
}

export default TabsLayout