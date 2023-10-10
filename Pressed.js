
import { TouchableOpacity,View,Text } from "react-native"


export const Pressed=({text,onPress})=>{

    return(
    <TouchableOpacity onPress={()=>onPress()}>
        <View 
            style={{
                backgroundColor:"black",
                width:90,
                height:40,
                margin:3,
                borderRadius:20,
                justifyContent:"center",
                alignItems:"center"
            }}>
            <Text style={{fontWeight:"bold",color:"white"}}>{text}</Text>
        </View>



    </TouchableOpacity>
    )
}