export default {
    namespace: 'count',
    state:{
        record: 0,
        current: 0,
    },
    reducers: {
        add(state,payload) {
            const newCurrent = state.current + 1;
            return{
                ...state,
                record: newCurrent > state.record ? newCurrent : state.record,
                current: newCurrent
            }
        },
        minus(state){
            return {
                ...state,
                current: state.current - 1
            }
        },
        clearRecord(state){
            return {
                ...state,
                record: 0,
            }
        },
        clearCurrent(state){
            return {
                ...state,
                current: 0,
            }
        },
        clear(state){
            console.info('...call clear in reducers...');
            return {
                ...state,
                current: 0,
                record: 0,
            }
        }
    },
    effects:{
        *addInEffect({payload},{put}){
            yield put( {type: 'add'} )
        },

        *minusInEffect({payload},{put}){
            yield put({type:'minus'});
        },
        *clearRecordInEffect({payload},{put}){
            yield put({type:'clearRecord'});
        },
        *clearBothInEffect({payload},{put}){
            console.info('...call clear in effects...');
            yield put({type:'clear'});
        }
    },
    subscriptions: {}
}