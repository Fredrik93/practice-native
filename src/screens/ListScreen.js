import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'


const ListScreen = () => {
    const friends = [
        { name: "Friend#1" },
        { name: "Friend#2" },
        { name: "Friend#3" },
        { name: "Friend#4" },
        { name: "Friend#5" },
        { name: "Friend#6" },
        { name: "Friend#7" },
        { name: "Friend#8" },
        { name: "Friend#9" }
    ]
    return (
        <FlatList
            data={friends}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(friend) => friend.name}
            //you can destructure this and write renderItem=({item}) => .. instead
            renderItem={(elem) => {
                return <Text style={styles.textStyle} > {elem.item.name}</Text>
            }} />)
}



const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
})


export default ListScreen