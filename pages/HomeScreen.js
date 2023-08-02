import { View, Text, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/core'
import { SafeAreaView } from 'react-native-safe-area-context';
import logo from '../assets/logo.png'
import { ChevronDownIcon, UserIcon, MagnifyingGlassCircleIcon, AdjustmentsVerticalIcon } from "react-native-heroicons/outline";
import Categories from '../components/Categories';
import FeatureRow from '../components/FeatureRow';


const HomeScreen = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])
    return (
        <SafeAreaView className="bg-slate-50">
            <View className="flex flex-row gap-3 mx-2 my-1 pb-3 ">

                <Image source={logo} className="w-8 h-8 rounded-full bg-gray-300 p-4" />

                <View className="flex-1">
                    <Text className="font-bold text-grey-500 text-xs">Deliver Now</Text>
                    <Text className="font-bold text-xl">Current Location
                        <ChevronDownIcon size={20} color="black" />
                    </Text>

                </View>
                <UserIcon size={35} color="black" />
            </View>
            {/* search box */}
            <View className="flex flex-row mx-2 space-x-2 items-center pb-4">
                <View className="flex flex-1 space-x-2 bg-gray-200 flex-row p-3 rounded-md">
                    <MagnifyingGlassCircleIcon color="black" />
                    <TextInput placeholder='Ki khabe' />
                </View>
                <AdjustmentsVerticalIcon color="black" />
            </View>
            <ScrollView className="bg-gray-100" contentContainerStyle={{ paddingBottom: 160 }}>
                <Categories />
                <FeatureRow title="Featured" description="Paid Placements for our partners" />
                <FeatureRow title="Tasty Discount" description="Everyone's enjoying the juicy Discounts" />
                <FeatureRow title="Offer near you!" description="Why not support your local restaurant tonight!" />
            </ScrollView>

        </SafeAreaView>

    )
}

export default HomeScreen