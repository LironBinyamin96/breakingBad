import React from 'react';
import { Text, View,FlatList,ImageBackground } from 'react-native';
import Style from '../utility/style';



const EpisodeScreen= props => {
    
    console.log('props1:' + JSON.stringify(props.route.params.SeasonsList));
    const episode = props.route.params.SeasonsList;

    return(
        <View style={Style.container}>
            <View style={{backgroundColor:'#1F6032', width:'100%',height:'9%',padding:7, alignItems:'center',marginBottom:5}}>
                <Text style={{fontSize:35,paddingLeft:15,color:'#fff'}}>
                    Season {episode.season} | Episode {episode.episode}
                </Text>
            </View>
            <View style={{backgroundColor:'#1F6032' ,backgroundSize: 'cover', width:'100%',height:'22%',borderRadius:10, alignItems:'center',justifyContent:'center',}}>
                <Text  style={{fontSize:40,color:'#FFF',textAlign:'center', alignItems:'center', backgroundColor: '#29773E',fontWeight:'bold'}}>      {episode.title}      </Text>
            </View>
            <View style={{backgroundColor:'#1F6032', width:'100%',height:'9%',padding:7, alignItems:'center',marginTop:5,marginBottom:20}}>
                <Text  style={{fontSize:35,paddingLeft:15,color:'#fff'}}>Characters</Text>
            </View>
            <FlatList
                    data={episode.characters}
                    keyExtractor={item => item.index}
                    renderItem={character =>
                        <View style={{width:'100%',padding:8, fontSize:50}}>
                            <Text style={{fontStyle:'italic',fontSize:20}}>-  {character.item}</Text>
                        </View>
                    }
                />
        </View>
    )   
}

export const screenOptions = navData => {
    return {
        HeaderTitle: 'Episode'
    }
}

export default EpisodeScreen;