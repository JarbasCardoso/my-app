import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export default function ButtonIcon({ icon, ...rest}) {
      return(

        <TouchableOpacity {...rest}>

            <MaterialIcons
              name={icon}
              size={24}
            
            />
        </TouchableOpacity>
      )
}

// rest,...rest