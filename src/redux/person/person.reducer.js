
const INITIAL_STATE = {
    name:           'Boris',
    sex:            'male',
    happiness:      5,
    hunger:         5,
    thirst:         5,
    health:         5,
    intelligence:   5,
    height:         170,
    weight:         75,
    alive:          true,
    age:            1,
}

function personReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'EAT':
            return {
                value: state.value + 1
            }
        case 'DRINK':
            return { value: state.value - 1 }
        default:
            return state
    }
}

export default personReducer;
