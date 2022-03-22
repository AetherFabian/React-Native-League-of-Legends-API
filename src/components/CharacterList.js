import { FlatList, StyleSheet,} from "react-native";
import React from 'react'
import Character from "./Character"

export default function CharacterList({ champions, navigation }) {
    return(
        <FlatList
            data = {champions}
            numColumns = {1}
            showsVerticalScrollIndicator = {false}
            contentContainerStyle={styles.flatListContentContainer}
            keyExtractor={(champion)=>String(champion["id"])}
            renderItem={({item}) => <Character champion = {item} navigation={navigation}/>}
        />
    )
}

const styles = StyleSheet.create({
    flatListContentContainer:{
        paddingHorizontal: 5,
        backgroundColor:"#141f40"
    }
})
