import { NativeModules, Button, View } from "react-native";

const { CalendarModule } = NativeModules;

function App() {
    return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button title="CreateEvent" onPress={() => {
            // console.log(modules)
            CalendarModule.createCalendarEvent('learn react native', 'IBM')
        }} />
    </View>
}

export default App;