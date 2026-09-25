
//import{createNativeStackNavigator} from '@react-navigation/stack'

//const Stack= createNative
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from '../screens/Home';
import Product from '../screens/Product';
const Stack = createNativeStackNavigator();
export function StackRoutes (){

    return (

        <Stack.Navigator>
            <Stack.Screen
              name="home"
              component ={Home}

            />

              <Stack.Screen
              name="product"
              component ={Product}

            />


        </Stack.Navigator>
    )
}