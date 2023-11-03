import { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

const UserName = props => {

    const [text, setText] = useState('Your Name')
    const onUpdate = () => {
        console.log('test')
        setText(text)
        console.log(text)
    }
    return <View>
        <TextInput style={page.input} onChange={() => {
            setText(text)
        }} />
        <Button onPress={onUpdate} title="Get Input" />
    </View>
}

const App = () => {

    return <View style={page.container}>
        <UserName />
    </View>
}
export default App;

//Common style
const page = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: 'pink'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: 'white'
    },
    text: {
        fontSize: 30,
        color: '#000'
    }

})
