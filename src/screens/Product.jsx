import { View } from "react-native"
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";
import Title from "../components/Title";
import ButtonIcon from "../components/Buttonlcon";


export default function Product() {
     const navigation= useNavigation();
     return(
    
            <View style={{
    
                flex:1,
                padding:20,
                paddingTop:54,
    
            }}>
    
                <Header>
                    <ButtonIcon
                    
                    icon="arrow-circle-left"
                    onPress={()=>navigation.goBack()}
                    />
                    <Title>Product</Title>
    
    
                </Header>
    
                
            </View>
         )

    

}