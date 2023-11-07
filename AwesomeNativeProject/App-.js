import { View, Text, Button, Alert } from "react-native"
import { configureStore, createSlice, } from '@reduxjs/toolkit'
import { Provider, useDispatch, useSelector } from 'react-redux'

//
const counterSlice = createSlice({
    name: 'counter',  //name used in action types : 'counter/increment'
    initialState: {
        value: 30
    },
    reducers: {
        //object notation pattern
        increment(state) {
            state.value++
        },
        decrement(state) {
            state.value--
        },
        incrementBy(state, action) {
            state.value += action.payload
        }
    },
    //builder callback api : it is recommended for typescript
    extraReducers: builder => {
        //builder.addCase
        builder.addDefaultCase((state, action) => { })
    }

})

//extract actions 
const { increment, decrement, incrementBy } = counterSlice.actions
console.log(increment())
const counterReducer = counterSlice.reducer

const appStore = configureStore({
    reducer: {
        //list of Reducers
        counter: counterReducer
    }
})
const Counter = props => {
    //Grab state from the redux
    const counter = useSelector(state => {
        //Get counter from the counter reducer
        return state.counter //appState.reducerName
    })
    //Get Dispatcher 
    const dispatch = useDispatch()

    const onIncrementBy = evt => {
        //trigger with payload
        dispatch(incrementBy(2))
    }


    return <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center' }}>
        <Text>Counter Page</Text>
        <Text>Counter : {counter.value}</Text>
        <Button onPress={() => {
            dispatch(increment())
        }} title="+" />
        <Button onPress={() => {
            dispatch(decrement())
        }} title="-" />

        <Button onPress={onIncrementBy} title='IncrementBy' />
    </View>

}

export default function App() {
    return <Provider store={appStore}>
        <Counter />
    </Provider>

}