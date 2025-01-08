import CustomButton from "@components/common/CustomButton";
import images from "@constants/images";
import { useGlobalContext } from "@context/GlobalProvider";
import { Href, Redirect, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const signIn = "/sign-in" as Href;
  const home = "/home" as Href;
  const {isLoading, isLoggedIn} = useGlobalContext();

  //if(!isLoading && isLoggedIn) return <Redirect href={home}/>
  
  return (
    <SafeAreaView className="h-full">
      <ScrollView contentContainerStyle={{height: '100%'}}>
        <View className="w-full justify-center items-center h-full px-4">
          <Image 
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
          <CustomButton 
            label="Continue with email"
            handlePress={() => {router.push(signIn)}}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}