import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { StarIcon, MapPinIcon } from 'react-native-heroicons/solid'

const RestaurantCards = ({
    id, imgUrl, title, rating, genre, address, short_desc, dishes, long, lat
}) => {
    return (
        <TouchableOpacity className="bg-white shadow mr-3">
            <Image source={{ uri: imgUrl }} className="h-36 w-64 rounded-sm" />
            <View className="px-3 pb-4">
                <Text className="font-bold text-lg pt-2">{title}</Text>
                <View className="flex flex-row items-center space-x-2">
                    <StarIcon color="green" opacity={0.5} size={22} />
                    <Text><Text className="text-green-500">{rating}</Text>-{genre}</Text>
                </View>
                <View className="flex flex-row items-center space-x-1">
                    <MapPinIcon color="gray" opacity={0.4} size={22} />
                    <Text className="text-xs text-gray-500">Nearby - {address}</Text>
                </View>
            </View>

        </TouchableOpacity>
    )
}

export default RestaurantCards