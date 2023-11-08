import { configureStore } from '@reduxjs/toolkit'
import { View, StyleSheet, Text, Button, Alert } from 'react-native'
import { Provider, useSelector, useDispatch } from 'react-redux'

const CounterReducer = (intialState = { counter: 10 }, action) => {
    //biz logic
    switch (action.type) {
        case 'counter/increment':
            return { ...intialState, counter: intialState.counter + 1 }
        default:
            return intialState
    }
}
const ReviewReducer = (intialState = { like: 10 }, action) => {
    //biz logic
    switch (action.type) {
        case 'review/like':
            return { ...intialState, like: intialState.like + 1 }
        default:
            return intialState
    }
}
//create store obejct 
const store = configureStore({
    reducer: {
        //list of reducers
        counter: CounterReducer,
        like: ReviewReducer
    }
})

const Counter = props => {
    //grab redux state via hook: useSelector
    const value = useSelector(state => {
        //appState.reducerName
        console.log(state)
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

const Like = props => {
    //grab redux state via hook: useSelector
    const value = useSelector(state => {
        //appState.reducerName
        return state.like
    })

    //declare dispatcher
    const dispatch = useDispatch();

    const onIncrement = () => {
        //pass action: action is just object having key called type 
        dispatch({
            type: 'review/like'
        })
    }
    return <>
        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Like {value.like} </Text>
        <Button title="OnIncrement" onPress={onIncrement} />
    </>
}


const App = () => {
    return <Provider store={store}>
        <View style={styles.container}>
            <Counter />
            <Like />
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

