import React from 'react';
import { Text, View,Image } from 'react-native';
import Style from '../utility/style';

const CharacterScreen= props => {
    console.log('props1:' + JSON.stringify(props.route.params.CharactersList));
    const Character = props.route.params.CharactersList;

    let StatusColor = '';
    switch (Character.status){
        case 'Alive': StatusColor = '#008000'; break;
        case 'Deceased': StatusColor = '#8B0000';break;
        case 'Presumed dead': StatusColor = '#FFA500';break;
    }

    return(
        <View style={Style.container}>
            <View style={{backgroundColor:'#1F6032', width:'100%',height:'7%', alignItems:'center',justifyContent:'center'}}>
                <Text style={Style.textForTitle}>{Character.name}</Text>
            </View>
            <View style={{width:250, height:350,overflow: 'hidden',}}>
            <Image
                style={{width:'100%', height: '100%',}}
                source={{uri:Character.img}}/>  
            </View>
            
            <View style={{width:'100%'}} >
            </View>
            <View style={{width:'60.5%', height:'5%',backgroundColor:StatusColor}}>
                <Text style={{ textAlign:'center',fontSize:22,color:'#fff'}}>
                    {Character.status}</Text>
            
            </View>
            <View  style={{flex:1,margin:15}} >
            <Text style={Style.textData}>Name: {Character.name}</Text>
            <Text style={Style.textData}>Birthday: {Character.birthday}</Text>
            <Text style={Style.textData}>Nickname: {Character.nickname}</Text>
            <Text style={Style.textData}>Portrayed: {Character.portrayed}</Text> 
            <Text style={Style.textData}>Appearance: {Character.appearance+' '}</Text>
            </View>
            
        </View>
    )   
}

export const screenOptions = navData =>  {
    return {
         HeaderTitle: 'Breaking Bad - Character'
    }
}

export default CharacterScreen;