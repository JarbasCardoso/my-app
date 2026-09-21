import { Text } from "react-native";

export default function Title({ children }) {

    return(

        <Text style={{ fontSize: 22, fontWeight: 700 }}>
            {children}

        </Text>
    )

}