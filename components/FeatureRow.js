import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCards from './RestaurantCards'

const FeatureRow = ({ title, description }) => {
    return (
        <View>
            <View className="mt-4 flex-row items-center justify-between px-4">
                <Text className="font-bold text-lg">{title}</Text>
                <ArrowRightIcon color="black" />
            </View>
            <Text className="text-xs text-gray-500 px-4">{description}</Text>
            <ScrollView horizontal
                contentContainerStyle={{ paddingHorizontal: 15 }} showsHorizontalScrollIndicator={false} className="pt-4">
                <RestaurantCards title={"I love Shusi"} imgUrl={'https://www.mayakaimal.com/wp-content/uploads/2022/03/Skillet-Chicken-Biriyani.jpg'} rating={4.5} genre={"KI jani"} address={'211 Mankundu GreenPark'} />
                <RestaurantCards title={"I love Shusi"} imgUrl={'https://www.mayakaimal.com/wp-content/uploads/2022/03/Skillet-Chicken-Biriyani.jpg'} rating={4.5} genre={"KI jani"} address={'211 Mankundu GreenPark'} />
                <RestaurantCards title={"I love Shusi"} imgUrl={'https://www.mayakaimal.com/wp-content/uploads/2022/03/Skillet-Chicken-Biriyani.jpg'} rating={4.5} genre={"KI jani"} address={'211 Mankundu GreenPark'} />
            </ScrollView>
        </View>
    )
}

export default FeatureRow