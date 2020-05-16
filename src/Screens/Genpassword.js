import React  from 'react'
import Input from '../UI/input'
import InputText from '../UI/inputText'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {generate} from 'libs/index.js'
import {Path, Svg} from 'react-native-svg'
import Clipboard from "@react-native-community/clipboard";

export default class GenPassword extends React.Component{
    constructor(props){
        super(props)
        this.state={
            key:'',
            target:'',
            salt:'',
            password:''
        }
        // this.keyRef =React.createRef()

    }
    componentDidMount(){
        // console.log('password hashed', generate('thai','1999','facebook'))
    }
   
    handleCopy =()=>{
        Clipboard.setString(this.state.password)
    }
    handleGenerate=()=>{
        // console.log(this.keyRef);
        
        const {key, target,salt} = this.state
        // if (!!key) {
        //     this.keyRef.focus()
        //     return
        // }  
        // if (!!target) {
        //     this.keyRef.focus()
        //     return
        // }  
        // if (!!salt) {
        //     this.keyRef.focus()
        //     return
        // }
        this.setState({password:generate(key, salt, target)})
    }
    render(){
        const {key, target,salt, password} = this.state

        return <View styles={styles.container}>
            <Input ref={this.keyRef} onChange={(value)=>this.setState({key:value})} label="Your key" type='password' value={key} placeholder="Whatever you can remember"></Input>
            <Input ref={r=>this.saltRef=r} onChange={(value)=>this.setState({salt:value})}  label="Your salt" type='password' placeholder="Onother thing you remember"></Input>
            <Input ref={r =>this.targetRef=r} onChange={(value)=>this.setState({target:value})}  label="Target" placeholder="Facebook"></Input>
            <Input value={password} editable={false}  label="Your Password" type='password' placeholder="No need to remember"></Input>
            <TouchableOpacity onPress={()=>this.handleCopy('string')} style={styles.copy}>
              <View style={styles.copy}>
              <Svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path d="M18 6H20C20.5304 6 21.0391 6.21071 21.4142 6.58579C21.7893 6.96086 22 7.46957 22 8V22C22 22.5304 21.7893 23.0391 21.4142 23.4142C21.0391 23.7893 20.5304 24 20 24H8C7.46957 24 6.96086 23.7893 6.58579 23.4142C6.21071 23.0391 6 22.5304 6 22V8C6 7.46957 6.21071 6.96086 6.58579 6.58579C6.96086 6.21071 7.46957 6 8 6H10M11 4H17C17.5523 4 18 4.44772 18 5V7C18 7.55228 17.5523 8 17 8H11C10.4477 8 10 7.55228 10 7V5C10 4.44772 10.4477 4 11 4Z" stroke="#666D7C" stroke-linecap="round" stroke-linejoin="round"/>
                    </Svg>
                    <Text style={styles.text}> Copy your password</Text>
              </View>
                    
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.handleGenerate()} style={styles.button}>
                <View style={styles.button}>
                   <Text style={styles.buttonText}> Generate Password</Text>
                </View>   
            </TouchableOpacity>
        </View>
    }
}


const styles = StyleSheet.create({
    container :{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
     },
     copy: {
       flex:1,
       justifyContent: 'center',
       alignItems: 'center',
       margin:30,
       height:30,
       flexDirection: "row"
     },
     text:{
        color:'#2672E3',
         marginLeft:10
     },
     button:{
         height:48,
         flex:1,
         justifyContent: 'center',
         alignItems: 'center',
         backgroundColor:'#57B440',
         flexDirection: 'row',
         borderRadius:8,
         margin:20,
         marginTop:50
     },
     buttonText:{
        color:'#fff',
        fontSize:16
     }
})