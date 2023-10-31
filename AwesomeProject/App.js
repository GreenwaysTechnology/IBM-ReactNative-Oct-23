import { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const Review = props => {
    const [like, setLike] = useState(0)
    //listener
    const onLike = () => {
        setLike(like + 1)
    }
    return <>
        <Text style={styles.label}>Review Application</Text>
        <Text style={styles.label}>Like : {like}</Text>
        <Button title="Like" onPress={onLike} />
    </>
}

const App = () => {
    return <View style={styles.container}>
        <Review />
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
