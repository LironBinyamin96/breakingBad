import React ,{useEffect, useState} from 'react';
import { Text, View,TouchableOpacity,FlatList,Image} from 'react-native';
import Style from '../utility/style';

const CharactersScreen= props => {
    const [dataCharacters, setDateCharacters] = useState([]);

    const loadData = async() =>{
        const url = 'https://www.breakingbadapi.com/api/characters';
        const response = await fetch(url , {method:'GET'});
        const serverData = await response.json();
        setDateCharacters(serverData);
        console.log('DATA:' + JSON.stringify(serverData))
    }
    
     useEffect(() =>{
         loadData();
     },[]);

     const setColor = (changeColor) =>{
        switch(changeColor.status ){
            case "Alive" : return '#008000';
            case "Deceased": return '#8B0000';
            case "Presumed dead" : return '#FFA500';
        }
     }

    return(
        <View style={Style.container}>
            <View style={{backgroundColor:'#E0E0E0', width:'100%',height:'24%', alignItems:'center'}}>
            <Image 
                    style={{width:220, height:130,marginTop:17}}
                    source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Breaking_Bad_logo.svg/369px-Breaking_Bad_logo.svg.png'}}
                />
            </View>
            <View style={{backgroundColor:'#1F6032', width:'100%',height:'9%', alignItems:'center',padding:7}}>
                <Text  style={{fontSize:35,paddingLeft:15,color:'#fff'}}>CHARACTERS</Text>
            </View>
            <FlatList
            data={dataCharacters}
            keyExtractor = {item => item.char_id}
            renderItem ={CharactersItem => 
            <View>
                <TouchableOpacity style={Style.TouchableOpacityCharacters}
                 onPress = {() => {props.navigation.navigate('Character',{CharactersList:CharactersItem.item})}}>
                <View style={Style.characterView} > 
                    <View style={{ width:'30%', height: 100}}>
                    <Image style={{width: 82, height: 100, padding:5}}
                    source={{uri:CharactersItem.item.img}}  />
                </View>
                <View style={{flex:0.1,height:100,backgroundColor:setColor(CharactersItem.item),marginRight:10}}></View>
                <View style={{flex:2,width:'75%',height:100}}>
                    <Text style={Style.textCharacters}>
                    {CharactersItem.item.name } 
                    </Text>
                    <Text>
                    {CharactersItem.item.nickname}
                    </Text>
                </View>
                </View>
                </TouchableOpacity>
            </View>
            }
            />
            
        </View>
    )   
}

export const screenOptions = navData => {
    return {
        HeaderTitle: 'Breaking Bad - Characters'
    }
}
export default CharactersScreen;