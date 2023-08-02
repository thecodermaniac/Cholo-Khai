import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCards from './CategoryCards'
import demoImg from '../assets/logo.png'

const Categories = () => {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingHorizontal:15, paddingTop:10}}>
            <CategoryCards title="Testing" imgUrl={demoImg}/>
            <CategoryCards title="Testing" imgUrl={demoImg}/>
            <CategoryCards title="Testing" imgUrl={demoImg}/>
            <CategoryCards title="Testing" imgUrl={demoImg}/>
            <CategoryCards title="Testing" imgUrl={demoImg}/>
        </ScrollView>
    )
}

export default Categories