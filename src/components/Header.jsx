import { View } from "react-native";

export default function Header({children}) {

    return(

        <View style={{ 
            width:'100%',
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
            marginBottom: 54,
        }}>

          {children}

        </View>
    )

}