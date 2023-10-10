import React from "react";
import { View ,Text} from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { Pressed } from "./Pressed";
import { setAuthor } from "./Slice";

export const Bar=()=>{
    const dispatch=useDispatch();
    const author=useSelector((state)=>state.counter);
    React.useEffect(()=>{
        console.log(author);
    },[]);


    return(
        <View style={{justifyContent:"center",alignItems:"center"}}>
            <Text style={{fontSize:20,fontWeight:"bold"}}>name:{author.author.name}</Text>
            <Text style={{fontSize:20,fontWeight:"bold"}}>surname:{author.author.surname}</Text>
            <Pressed text={"change"} onPress={()=>{
                dispatch(setAuthor({
                    name:"çağrı",
                    surname:"gürlük"
                }))
            }}/>
        </View>
    )
}