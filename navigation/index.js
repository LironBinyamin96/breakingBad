//! קריאה לספריות
import React from "react";
import {createStackNavigator } from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


//! יבוא הדפים
//TODO Characters
import CharactersScreen,{screenOptions as CharactersScreenOptions} from "../Characters/index";
import CharacterScreen,{screenOptions as CharacterScreenOptions} from "../Characters/Character";
//TODO Episodes
import EpisodesScreen,{screenOptions as EpisodesScreenOptions} from "../Episodes/index";
import EpisodeScreen,{screenOptions as EpisodeScreenOptions} from "../Episodes/episode";


//TODO quotes
import quotesScreen,{screenOptions as quotesScreenOptions} from "../quotes/index";

//! הכנת מחסנית לכל תיקייה
//TODO - Characters
const CharactersStackNavigator = createStackNavigator();
export const CharactersStack = () => {
    return(
        <CharactersStackNavigator.Navigator>
            <CharactersStackNavigator.Screen name = 'Characters' component= {CharactersScreen} options = {CharactersScreenOptions}/>
            <CharactersStackNavigator.Screen name = 'Character' component= {CharacterScreen} options = {CharacterScreenOptions}/>
            </CharactersStackNavigator.Navigator>
       )   
    }

//TODO - Episodes
const EpisodesStackNavigator = createStackNavigator();
export const EpisodesStack = () =>{
    return(
        <EpisodesStackNavigator.Navigator>
            <EpisodesStackNavigator.Screen name = 'Episodes' component= {EpisodesScreen} options = {EpisodesScreenOptions}/>
            <EpisodesStackNavigator.Screen name = 'Episode' component= {EpisodeScreen} options = {EpisodeScreenOptions}/>
        </EpisodesStackNavigator.Navigator>
    )
}

//TODO - quotes
const QuotesStackNavigator = createStackNavigator();
export const QuotesStack = () => {
    return(
        <QuotesStackNavigator.Navigator>
            <QuotesStackNavigator.Screen name = 'Quotes' component = {quotesScreen} options = {quotesScreenOptions} />
        </QuotesStackNavigator.Navigator>
    )
}

//! יצירת תפריט 


const AppBottomBarNavigator = createMaterialBottomTabNavigator();
export const AppBottomBar = () => {
    return(
        <AppBottomBarNavigator.Navigator activeColor='#ffff' inactiveColor='#093009'  barStyle = {{backgroundColor:'#369457'}}>
            <AppBottomBarNavigator.Screen options={{
                tabBarLabel:'Characters', 
                tabBarIcon:({focused}) => {
                    const iconShape = focused ? 'people-sharp' : 'people-outline'
                    const iconColor = focused ? '#ffff' : '#093009'
                    const iconSize = focused ? 25 : 20

                    return(
                        <Ionicons name={iconShape} color={iconColor} size={iconSize}/>
                    )
                }}}
                name='CharactersStack'
                component={CharactersStack}
            />
            <AppBottomBarNavigator.Screen options={{
                tabBarLabel:'Episodes', 
                tabBarIcon:({focused}) => {
                    const iconShape = focused ? 'tv' : 'tv-outline'
                    const iconColor = focused ? '#ffff' : '#093009'
                    const iconSize = focused ?  25 : 20

                    return(
                        <Ionicons name={iconShape} color={iconColor} size={iconSize}/>
                    )
                }}}
                name='EpisodesStack'
                component={EpisodesStack}
            />
            <AppBottomBarNavigator.Screen options={{
                tabBarLabel:'Quotes', 
                tabBarIcon:({focused}) => {
                    const iconShape = focused ? 'format-quote-close' : 'format-quote-close-outline'
                    const iconColor = focused ? '#ffff' : '#093009'
                    const iconSize = focused ?  25 : 20

                    return(
                        <MaterialCommunityIcons name={iconShape} color={iconColor} size={iconSize}/>
                    )
                }}}
                name='QuotesStack'
                component={QuotesStack}
            />
        </AppBottomBarNavigator.Navigator>
    )
}
