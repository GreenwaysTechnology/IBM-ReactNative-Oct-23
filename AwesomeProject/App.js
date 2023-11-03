import { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button, SafeAreaView, StatusBar } from "react-native";

const App = () => {
    return <SafeAreaView style={page.container}>
        <StatusBar
            animated={true}
            backgroundColor="lightblue"
            barStyle="dark-content"

        />
    </SafeAreaView>
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
