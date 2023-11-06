import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, View, Text, Button, Alert } from 'react-native'

//create Stack Object 
const Stack = createNativeStackNavigator();

//Screens 
const HomeScreen = props => {
    const { navigation: { navigate } } = props
    const onMove = () => {
        navigate('Profile', { id: 1, name: 'Subramaian', city: 'Coimbatore' })
    }
    return <View style={styles.container}>
        <Text style={{
            fontSize: 40,
        }}>Home Screen</Text>
        <Button title="Profile" onPress={onMove} />
    </View>
}
const ProfileScreen = props => <View style={styles.container}>
    <Text style={{
        fontSize: 40,
    }}>Profile Screen</Text>
    <View>
        <Text>Id : {props.route.params.id}</Text>
        <Text>Name : {props.route.params.name}</Text>
        <Text>City: {props.route.params.city}</Text>

    </View>
</View>

const App = props => {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
    </NavigationContainer>
}
export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
        justifyContent: 'center',
        alignItems: 'center'
    }
})