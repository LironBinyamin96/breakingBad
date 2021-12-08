import {StyleSheet} from 'react-native';
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E0E0E0',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        alignItems:'center',
        justifyContent:'center',
        overflow: 'hidden',
        
    },
    TouchableOpacityCharacters:{
        backgroundColor:'#ffffff',
        width:'100%',
        marginTop:12,
        borderRadius:20,
        textAlign:'center',
        alignItems:'center',
        shadowColor:  '#1F6032',
        shadowRadius: 8,
        shadowOpacity: 10,
        overflow: 'hidden', 
    },
    TouchableOpacitySeasons:{
        backgroundColor:'#ffffff',
        width:'95%',
        height:90,
        borderRadius:15,
        textAlign:'center',
        alignItems:'center',
        shadowColor: '#1F6032',
        shadowOpacity: 10,
        margin: 10
    },

    textCharacters:{
        fontWeight: "bold",
        fontSize: 20,
        justifyContent: 'center',
        color:'#1F6032',
        marginTop:25

    },
    textForTitle:{
        color:'#ffffff',
        fontSize:35,
        alignItems:'center',
    },
    textData:{
        fontSize:22,
    },
    characterView:{
        flex:1,
        flexDirection:'row', 
        width:'100%', 
        height:100, 
        justifyContent:'center', 
        alignItems:'center',
        backgroundColor:'#fff',
        borderRadius:10,
        overflow: 'hidden',
      },


});