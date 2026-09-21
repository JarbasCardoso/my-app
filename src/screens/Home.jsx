import { View } from "react-native"
import { useNavigation } from "@react-navigation/native";

import Header from "../components/Header";
import Title from "../components/Title";
import ButtonIcon from "../components/Buttonlcon";


export default function Home() {
    
    const navigation = useNavigation ();
     return(

        <View style={{

            flex:1,
            padding:20,
            paddingTop:54,

        }}>

            <Header>
                <Title>Home</Title>
                <ButtonIcon
                
                icon="add-circle"
                onPress={() =>navigation.navigate("product")}
                />


            </Header>

            
        </View>
     )
}