import { StyleSheet, View, Text, FlatList } from "react-native";

//mock data 
const contacts = [{
    name: 'Subramanian'
},
{
    name: 'Murugan'
},
{
    name: 'Karthik'
},
{
    name: 'Joel'
},
{
    name: 'Sunil'
},
{
    name: 'Naga'
},
{
    name: 'Kamal'
},
{
    name: 'Subramanian'
},
{
    name: 'Murugan'
},
{
    name: 'Karthik'
},
{
    name: 'Joel'
},
{
    name: 'Sunil'
},
{
    name: 'Naga'
},
{
    name: 'Kamal'
},
{
    name: 'Subramanian'
},
{
    name: 'Murugan'
},
{
    name: 'Karthik'
},
{
    name: 'Joel'
},
{
    name: 'Sunil'
},
{
    name: 'Naga'
},
{
    name: 'Kamal'
}

];

const App = () => {
    return <View style={page.container}>
        <Text style={page.text}>Contacts</Text>
        {/* <FlatList
            data={contacts}
            renderItem={(obj) => {
                console.log(obj)
                return <Text style={page.item}>{obj.item.name}</Text>
            }}
        /> */}
        {/* <FlatList
            data={contacts}
            renderItem={({ item }) => {
                return <Text style={page.item}>{item.name}</Text>
            }}
        /> */}
        <FlatList
            data={contacts}
            renderItem={({ item: { name } }) => {
                return <Text style={page.item}>{name}</Text>
            }}
        />
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
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        fontWeight: 'bold',
        color: 'blue'

    },
    text: {
        fontSize: 30,
        textAlign: 'center',
        color: '#000'
    }

})
