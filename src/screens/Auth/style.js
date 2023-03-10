import { StyleSheet } from "react-native";
import { _12px, _14px, _16px, _18px } from "../../utils/responsive";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'darkblue'
    },
    registerLogo:{
        flex:0.3
    },
    logo:{
        flex:1
    },
    inputsContainer:{
        padding:20,
        borderTopEndRadius:15,
        borderTopLeftRadius:15,
        backgroundColor:'white',
        flex:2
    },
    navBtn:{
        color:'red',
        fontWeight:'700'
    },
    titleContainer:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    title:{
        fontSize:_16px*1.8,
        fontWeight:'bold'
    },
    btnContainer:{
        backgroundColor:'red',
        marginVertical:20,
        padding:10
    },
    forgotPasswordNav:{
        textAlign:'right',
        color:'darkblue',
        fontWeight:'bold',
        fontSize:_14px
    },
    registerLogoTxt:{
        color:'red',
        fontSize:_18px*3,
        fontWeight:'bold',
        textAlign:'center',
        flexDirection:'column',
        flex:1,
    },
    logoTxt:{
        color:'red',
        fontSize:_18px*3,
        fontWeight:'bold',
        textAlign:'center',
        flexDirection:'column',
        flex:1,
        marginTop:50
    },
    btnText:{
        color:'white',
        textAlign:'center',
    },
    inputs:{
       borderColor:'lightgray',
       borderWidth:1,
       marginVertical:20,
       paddingHorizontal:20 
    },
    backArrow:{
        fontSize:_18px*2,
        color:'gray'
    },
    cancelBtn:{
        textAlign:'center',
        color:'darkblue'
    }
})