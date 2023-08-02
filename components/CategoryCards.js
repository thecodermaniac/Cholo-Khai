import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const CategoryCards = ({ title, imgUrl }) => {
    return (
        <TouchableOpacity className="m-4">
            <Image source={imgUrl} className="h-20 w-20 rounded-md"/>
            <Text className="absolute bottom-1 text-white">{title}</Text>
        </TouchableOpacity>

    )
}

export default CategoryCards