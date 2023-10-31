import { Text, View, StyleSheet } from "react-native";

const Greeter = props => <>
    <Text style={styles.label}>{props.message}</Text>
</>
//Default Props
Greeter.defaultProps = {
    message: 'Hello'
}

const App = () => {
    return <View style={styles.container}>
        <Greeter message="Welcome" />
        <Greeter message="Hello" />
        <Greeter message="How are you" />
        <Greeter message="Hai" />
        <Greeter message="Greet" />

    </View>
}
export default App;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#f4e1d2',
        alignItems: 'center',
        justifyContent: 'center',
    },
    label: {
        fontSize: 30,
        color: 'red',
        textAlign: 'center',
        fontWeight: 'bold'
    }
})
