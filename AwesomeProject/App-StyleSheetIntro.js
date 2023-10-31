import { Text, View, StyleSheet } from "react-native";

const App = () => {
    return <View style={styles.container}>
        <Text style={styles.label}>React Native</Text>
        {/* Inline style */}
        <Text style={{
            color: 'blue',
            fontSize: 20,
            textAlign: 'center',
            borderRadius: 8,
            padding: 15,
            borderWidth: 4,
        }}>React Native is Best Javascript lib for Native Mobile App development</Text>

        <Text style={{
            color: 'blue',
            fontSize: 20,
            textAlign: 'center',
            borderRadius: 8,
            padding: 15,
            borderWidth: 4,
        }}>React Native is Best Javascript lib for Native Mobile App development</Text>

        <Text style={{
            color: 'blue',
            fontSize: 20,
            textAlign: 'center',
            borderRadius: 8,
            padding: 15,
            borderWidth: 4,
        }}>React Native is Best Javascript lib for Native Mobile App development</Text>

    </View>
}
export default App;

//Setting styles:

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#f4e1d2'
        // backgroundColor: 'lightblue',
        // height: 820
    },
    label: {
        fontSize: 30,
        color: 'red',
        textAlign: 'center',
        fontWeight: 'bold'
    }
})
