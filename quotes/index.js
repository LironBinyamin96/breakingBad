import React ,{useEffect, useState} from 'react';
import { Text, View,Image,FlatList} from 'react-native';
import Style from '../utility/style';

const quotesScreen= props => {

    const [dataQuotes, setDateQuote] = useState([]);

    const loadData = async() =>{
        const url = 'https://www.breakingbadapi.com/api/quotes';
        const response = await fetch(url , {method:'GET'});
        const serverData = await response.json();
        setDateQuote(serverData);
        console.log('DATA11:' + JSON.stringify(serverData))
    }
     useEffect(() =>{
         loadData();
     },[]);


    return(
        <View style={Style.container}>
        <View style={{backgroundColor:'#E0E0E0', width:'100%',height:'24%', alignItems:'center'}}>
            <Image 
                style={{width:220, height:130,marginTop:17}}
                source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Breaking_Bad_logo.svg/369px-Breaking_Bad_logo.svg.png'}}
            />
        </View>
        <View style={{backgroundColor:'#1F6032', width:'100%',height:'9%', alignItems:'center',padding:7}}>
            <Text  style={{fontSize:35,paddingLeft:15,color:'#fff'}}>QUOTES</Text>
        </View>
        <FlatList 
        data={dataQuotes}
        keyExtractor={item => item.quote_id}
        renderItem ={ renderQuote =>
        <View>
            <View style={{backgroundColor: '#fff',margin:8, width:400,borderRadius:20}}>
                <Text style={{marginTop:10,marginLeft:10,color:'#1F6032',fontWeight:'bold',fontSize:18}}>{renderQuote.item.quote}</Text>
                <Text style={{marginBottom:7,marginLeft:10,color:'#707070'}}>{renderQuote.item.author}</Text>
            </View>


        </View>
        
        }
        />
        </View>
    )   
}

export const screenOptions = navData => {
    return {
        HeaderTitle: 'quotes'
    }
}

export default quotesScreen;