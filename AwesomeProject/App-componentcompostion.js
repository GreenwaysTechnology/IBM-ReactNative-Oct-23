import { Text, View, StyleSheet } from "react-native";
import { Greeter } from "./components/greeter/Greeter";
// const Hello = props => <><Text style={styles.label}>Greeter</Text></>

// const Greeter = props => <>
//     <Hello />
// </>


const App = () => {
    return <View style={styles.container}>
        <Greeter />
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
