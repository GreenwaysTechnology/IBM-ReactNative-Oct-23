import { Text, StyleSheet } from "react-native"

export const Hello = props => <><Text style={styles.label}>Greeter!!</Text></>

const styles = StyleSheet.create({
    label: {
        fontSize: 30,
        color: 'red',
        textAlign: 'center',
        fontWeight: 'bold'
    }
})