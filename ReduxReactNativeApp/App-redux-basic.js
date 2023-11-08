import { configureStore } from '@reduxjs/toolkit'
import { View, StyleSheet, Text, Button, Alert } from 'react-native'
import { Provider, useSelector, useDispatch } from 'react-redux'

//Step:1 Delcare reducer
const CounterReducer = (intialState = { counter: 10 }, action) => {
    //biz logic
    switch (action.type) {
        case 'counter/increment':
            return { ...intialState, counter: intialState.counter + 1 }
        default:
            return intialState
    }
}
//create store obejct 
const store = configureStore({
    reducer: {
        //list of reducers
        counter: CounterReducer
    }
})



//Compoment which recieves state from Redux and also send action(request for muation)

const Counter = props => {
    //grab redux state via hook: useSelector
    const value = useSelector(state => {
        //appState.reducerName
        return state.counter
    })

    //declare dispatcher
    const dispatch = useDispatch();

    const onIncrement = () => {
        //pass action: action is just object having key called type 
        dispatch({
            type: 'counter/increment'
        })
    }
    return <>
        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Counter {value.counter} </Text>
        <Button title="OnIncrement" onPress={onIncrement} />
    </>
}


const App = () => {
    return <Provider store={store}>
        <View style={styles.container}>
            <Counter />
        </View>
    </Provider>
}
export default App;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

