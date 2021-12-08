import React ,{useEffect, useState} from 'react';
import { Text, View,FlatList,TouchableOpacity,Image} from 'react-native';
import Style from '../utility/style';


const EpisodesScreen= props => {
    const [dataSeasons, setDateSeasons] = useState([]);

    const loadData = async() =>{
        const url = 'https://www.breakingbadapi.com/api/episodes';
        const response = await fetch(url , {method:'GET'});
        const serverData = await response.json();
        setDateSeasons(serverData);
        console.log('DATA11:' + JSON.stringify(serverData))
    }
     useEffect(() =>{
         loadData();
     },[]);


    return( 
        <View style={Style.container}>
            <View style={{backgroundColor:'#E0E0E0', width:'100%',height:'24%', alignItems:'center',}}>
            <Image 
                    style={{width:220, height:130,margin:17}}
                    source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Breaking_Bad_logo.svg/369px-Breaking_Bad_logo.svg.png'}}
                />
            </View>
            <View style={{backgroundColor:'#1F6032', width:'100%',height:'9%', alignItems:'center',padding:7}}>
                <Text  style={{fontSize:35,paddingLeft:15,color:'#fff'}}>EPISODES</Text>
            </View>
            <FlatList
            data={dataSeasons}
            keyExtractor={item => item.episode_id}
            renderItem = {episodeItem =>
            <View>
                <TouchableOpacity style={Style.TouchableOpacitySeasons} onPress = {() => 
                    {props.navigation.navigate('Episode',{SeasonsList:episodeItem.item})}}> 
                    <Text style={{color:'#1F6032', padding:7,fontSize:20,fontWeight:'bold'}}>
                        {episodeItem.item.title}
                    </Text>
                    <Text style={{ padding:2,fontSize:15,fontWeight:'bold'}}>
                        season {episodeItem.item.season}  |  episode {episodeItem.item.episode} 
                    </Text>
                    <Text style={{color:'#707070',}}>air date: {episodeItem.item.air_date} </Text>
                    </TouchableOpacity>
                    
            </View>
            }    
            />
        </View>
    )   
}

export const screenOptions = navData => {
    return {
        HeaderTitle: 'Episodes'
    }
}

export default EpisodesScreen;