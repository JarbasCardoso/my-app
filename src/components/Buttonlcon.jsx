import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export default function ButtonIcon({ icon}) {
      return(

        <TouchableOpacity>

            <MaterialIcons
              name={icon}
              size={24}
            
            />
        </TouchableOpacity>
      )
}