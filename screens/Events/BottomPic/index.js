import React from 'react'
import { View, TouchableOpacity, Image, StyleSheet,TouchableWithoutFeedback } from "react-native"
import { Images } from '../../../common'
import { _toHome,_toLogin, _toProfileRegister} from "../../../navigation/Navigator";
import { useNavigation } from '@react-navigation/native';


 const BottomNav =()=>{
  const navigation = useNavigation();

    return (
    <View style={{ flexDirection:'row',justifyContent:'space-between',margin:20}}>

       <TouchableWithoutFeedback onPress={()=>_toHome(navigation)}>
          <Image source={Images.bhome} style={styles.image} />
        </TouchableWithoutFeedback> 

        <TouchableOpacity onPress={()=> _toLogin(navigation)}>
          <Image source={Images.gray} style={styles.image} />
        </TouchableOpacity> 

        <TouchableOpacity>
          <Image source={Images.search} style={styles.image} />
        </TouchableOpacity> 

        <TouchableOpacity>
          <Image source={Images.save} style={styles.image} />
        </TouchableOpacity> 

        <TouchableOpacity onPress={()=> _toProfileRegister(navigation)}>
          <Image source={Images.profile} style={styles.image} />
        </TouchableOpacity> 
    </View>
    )
}

const styles= StyleSheet.create({
    image:{
         width:20,
         height:20,
         resizeMode: "stretch",
         alignSelf: "center",

    }
})
export {BottomNav}