import { View,Text } from "react-native";
import { useSelector } from "react-redux";

export const Foo=()=>{

    const counter =useSelector((state)=>state.counter)
    return(
            <View>
                <Text style={{fontSize:45,fontWeight:"bold",color:"blue"}}>
                    {counter.count}
                </Text>
            </View>
    );
}