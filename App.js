import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View, ScrollView, KeyboardAvoidingView } from 'react-native';
// import { TextInput } from 'react-native-paper';

export default function App() {

  let [val, setval] = useState("")

  function calculater(buttonValue) {
    setval(result=>result.concat(buttonValue))
  }
  function clear(){
    setval("")
  }
  function result(){
   let result= setval(eval(val));
    if(result !==undefined){
      setval("syntox error")
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.maininput}>
        <Text style={styles.inputbox} >{!val?0:val}</Text>
      </View>
      <View style={styles.root} >
        <Pressable onPress={() => clear()}><Text style={styles.btncolorfull}>C</Text></Pressable>
        <Pressable onPress={() => calculater('%')}><Text style={styles.btncolorfull}>%</Text></Pressable>
        <Pressable onPress={() => calculater(')')}><Text style={styles.btncolorfull}>)</Text></Pressable>
        <Pressable onPress={() => calculater('(')}><Text style={styles.btncolorfull}>(</Text></Pressable>
        <Pressable onPress={() => calculater('/')}><Text style={styles.btncolorfull}>/</Text></Pressable>
        <Pressable onPress={() => calculater('9')}><Text style={styles.btn}>9</Text></Pressable>
        <Pressable onPress={() => calculater('8')}><Text style={styles.btn}>8</Text></Pressable>
        <Pressable onPress={() => calculater('7')}><Text style={styles.btn}>7</Text></Pressable>
        <Pressable onPress={() => calculater('-')}><Text style={styles.btncolorfull}>-</Text></Pressable>
        <Pressable onPress={() => calculater('6')}><Text style={styles.btn}>6</Text></Pressable>
        <Pressable onPress={() => calculater('5')}><Text style={styles.btn}>5</Text></Pressable>
        <Pressable onPress={() => calculater('4')}><Text style={styles.btn}>4</Text></Pressable>
        <Pressable onPress={() => calculater('+')}><Text style={styles.btncolorfull}>+</Text></Pressable>
        <Pressable onPress={() => calculater('3')}><Text style={styles.btn}>3</Text></Pressable>
        <Pressable onPress={() => calculater('2')}><Text style={styles.btn}>2</Text></Pressable>
        <Pressable onPress={() => calculater('1')}><Text style={styles.btn}>1</Text></Pressable>
        <Pressable onPress={() => calculater('*')}><Text style={styles.btncolorfull}>*</Text></Pressable>
        <Pressable onPress={() => calculater('0')}><Text style={styles.btn}>0</Text></Pressable>
        <Pressable onPress={() => calculater('.')}><Text style={styles.btn}>.</Text></Pressable>
        <Pressable onPress={() => calculater('+/-')}><Text style={styles.btn}>+/-</Text></Pressable>
        <Pressable onPress={() => result()}><Text style={styles.btncolorfull}>=</Text></Pressable>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: "100%",
    backgroundColor: "black",

  },
  maininput: {
    width: "100%",
  },
  inputbox: {
    width: "100%",
    height: 200,
    fontSize: 50,
    paddingRight: 30,
    textAlign: "right",
    color: "white",
  },
  root: {
    display: "flex",
    flexDirection: "row-reverse",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignItems: "center",
    gap: 7,
    borderTopWidth: 1,
    borderTopColor: "grey",
    // marginBottom:20,
    // backgroundColor:"black",
    padding: 10
  },
  btn: {
    backgroundColor: "#1c1c1c",
    color: "white",
    borderRadius: 80,
    // padding:34,
    fontSize: 20,
    width: 87,
    height: 87,
    lineHeight: 87,
    textAlign: 'center',
  },
  btncolorfull: {
    backgroundColor: "#be7906",
    color: "white",
    borderRadius: 80,
    // padding:34,
    fontSize: 24,
    width: 87,
    height: 87,
    lineHeight: 87,
    textAlign: 'center',
  },
  btnother: {
    backgroundColor: "#1c1c1c",
    color: "white",
    borderRadius: 80,
    // padding:28,
    width: "48%",
    fontSize: 20,
    textAlign: 'center',
    lineHeight: 80, // Center text vertically
  }
});