import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, StyleSheet, Text, Button } from 'react-native'

//create tab:
const Tab = createBottomTabNavigator();


//screens
const SettingsScreen = () => {
    return <View style={styles.container}>
        <Text style={styles.item}>Settings</Text>
    </View>
}
const HomeScreen = () => {
    return <View style={styles.container}>
        <Text style={styles.item}>Home</Text>
        <Button title="Posts" />
    </View>
}
const App = () => {
    return <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Settings" component={SettingsScreen} />
            <Tab.Screen name="Home" component={HomeScreen} />
        </Tab.Navigator>
    </NavigationContainer>

}

export default App;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
        justifyContent: 'center',
        alignItems: 'center'
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        fontWeight: 'bold',
        color: '#000'

    },
    text: {
        fontSize: 30,
        textAlign: 'center',
        color: '#000'
    }
})