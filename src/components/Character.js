import { 
    View, 
    Text, 
    StyleSheet, 
    Image, 
    TouchableWithoutFeedback,
} from 'react-native';
import React, { useState, useEffect } from "react";
import { getCharacterByIdApi } from '../api/characters';

export default function Character({ champion, navigation }) {
    const { id } = UseParams();
    const [champion, setChampion] = useState();
    const [image, setImage] = useState({});

    const fetchCharacterById = async () =>{
        const request = await getCharacterByIdApi(id);
        const imageAPI = 'http://ddragon.leagueoflegends.com/cdn/12.5.1/img/champion/' + id + '.png';
        setImage(imageAPI);
        setChampion(request);
    };

    useEffect(() => {
        fetchCharacterById();
    });
            return (
        <TouchableWithoutFeedback
            onPress={()=>{
                navigation.navigate("CharacterDetails", champion["id"]);
            }}
        >
            <View style = {styles.character}>
                <View style = {styles.spacing}>
                    <Image source = {{ uri: image}} style={styles.image}/>
                    <View style = {styles.character__info}>
                        <Text style={styles.character__name}> {character["id"]} </Text>
                        <View style= {styles.character__status}>
                            <View style={styles.status_indicator__container}>
                        </View>
                        <View style={styles.character__data}>
                            <Text style = {styles.Data__title}>
                                Title:
                            </Text>
                            <Text style = {styles.Data__location}>
                                {character["title"]}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    character:{
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
    },
    spacing:{
        flex:1,
        flexDirection: "row",
        paddingRight: 10,
        paddingTop:20,
        paddingLeft:10,
    },
    image:{
        position: "relative",
        width: 180,
        height: 180,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    character__info:{
        flex:1,
        flexDirection: "column",
        justifyContent:"center",
        alignContent: "flex-start",
        paddingLeft: 10,
        height: "100%",
        backgroundColor: "#133b80",
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
    character__name:{
        height: 50,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        color: '#fefefe',
        fontSize: 18,
        fontWeight: "bold",
        textAlignVertical: "center",
    },
    character__status: {
        flex:1,
        flexDirection:"row",
        justifyContent:"flex-start",
        alignContent:"flex-start",
    },
    status_indicator__container: {
        height:17,
    },
    character__alive: {
        backgroundColor: "#54DB33",
    },
    character__dead: {
        backgroundColor: "#AC1500"
    },
    character__status_indicator: {
        flex:1,
        marginTop:7,
        height:10,
        width:10,
        borderRadius:10,
    },
    character__status_text: {
        color: "#fff",
        marginLeft: 10,
        fontSize: 14,
    },
    character__data: {
        marginBottom:10,
    },
    Data__title: {
        color: "#8a8b8c",
        fontSize: 13,
    },
    Data__location: {
        color: "#fff",
        fontSize: 14,
    },
});
