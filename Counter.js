import React from "react";

import { View ,Text, TouchableOpacity} from "react-native";
import { useSelector,useDispatch } from "react-redux";
import { decrease, increase, refresh } from "./Slice";
import { Pressed } from "./Pressed";
//useSelector
//useDispatch

export const Counter =()=>{
    const dispatch=useDispatch();
    const counter =useSelector((state)=>state.counter);
    React.useEffect(()=>{
        console.log(counter);
    },[])

    return(  <View style={{
                    backgroundColor:'#eaeaea',
                    borderRadius:30,
                    width:300,
                    height:300,
                    justifyContent:"center",
                    alignItems:"center"
                
                }}
                    >
                        <Text style={{fontSize:30,fontWeight:"bold"}}>{" "}{counter.count}{" "}</Text>
                       
                        <Pressed text={"increase"} onPress={()=>dispatch(increase())}/>
                        <Pressed text={"decrease"} onPress={()=> dispatch(decrease())}/>
                        <Pressed text={"refresh"} onPress={()=> dispatch(refresh())}/>
                    </View>
    );
    
};


