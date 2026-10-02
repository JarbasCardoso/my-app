//Arquivo responsavel por criar um contextto de navegação
//NavigationContainer :guarda o estado da navegação  (Context)
import { NavigationContainer } from "@react-navigation/native";


import { StackRoutes } from "./StackRoutes";
import { BottomRoutes } from "./BottomRoutes";
//import { DrawerRoutes } from "./DrawerRoutes";

//aqui irá ficar o contexto de navegação, que vai envolver toda a aplicação, e dentro dele vai ter as rotas da aplicação
//valores possiveis para a constante- "stack" | "bottowm" | "drawer" 

const TIPO_DE_NAVEGACAO = "bottom";

export function Routes (){


    return (
         <NavigationContainer>
            {/* Renderização condicional :Só um navegador fica ativo por vez */}
            {TIPO_DE_NAVEGACAO === "stack" && <StackRoutes/>}
            {TIPO_DE_NAVEGACAO === "bottom" && <BottomRoutes/>}
            
         </NavigationContainer>


    )
}