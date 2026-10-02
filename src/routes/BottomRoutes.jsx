//Arquivo responsavel por registrar e configuar a navegação por ABAS (Bottom Tabs)

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import  Home  from "../screens/Home";
import  Product  from "../screens/Product";

const Bottom= createBottomTabNavigator();
export function BottomRoutes (){

    return (
       <Bottom.Navigator>
         <Bottom.Screen 
         name="home" 
         component={Home}
         
         options={{headerShown: false}}/>


         <Bottom.Screen
         
           name="product"
           component={Product}
           options={{headerShown: false}}
         />


       </Bottom.Navigator>
    )
}