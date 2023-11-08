import { configureStore, createReducer, createSlice } from '@reduxjs/toolkit'
import { produce } from 'immer'
import { View, StyleSheet, Text, Button, Alert } from 'react-native'
import { Provider, useSelector, useDispatch } from 'react-redux'

//old way of writting reducers
// const CounterReducer = (intialState = { counter: 10 }, action) => {
//     //biz logic
//     switch (action.type) {
//         case 'counter/increment':
//             //return { ...intialState, counter: intialState.counter + 1 }
//             return produce(intialState, draftState => {
//                 draftState.counter += 1
//             })
//         default:
//             return intialState
//     }
// }
//new way: createReducer

// const CounterReducer = createReducer(initalState = { counter: 100 }, builder => {
//     builder.addCase('counter/increment', (state, action) => {
//         //internally it is using immer js produce function
//         state.counter++
//     }).addDefaultCase((state, action) => {
//         console.log('default case', state)
//     })
// })

//new way create slice:
const CounterSlice = createSlice({
    name: 'Counter',
    initialState: {
        counter: 1002
    },
    reducers: {
        increment(state) {
            state.counter++
        }
    },
    extraReducers: builder => {
        builder.addDefaultCase((state, action) => { })
    }
})
//Extract reducers and actions 
const { increment } = CounterSlice.actions
const CounterReducer = CounterSlice.reducer


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
            type: increment
            //type: 'counter/increment'
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

