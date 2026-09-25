//Arquivo responsavel por criar um contextto de navegação

import { NavigationContainer } from "@react-navigation/native";
import { StackRoutes } from "./StackRoutes";


export function Routes (){


    return (
         <NavigationContainer>
            <StackRoutes/>  
         </NavigationContainer>


    )
}