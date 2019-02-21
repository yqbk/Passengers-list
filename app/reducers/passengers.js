import { ADD_PASSENGER } from '../actions/passengersActions';

const initialState = {
    passengers: [null, null, null],
    errorMessage: '',
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_PASSENGER: {
            console.log(action);
            return {
                ...state,
                passengers: state.passengers.reduce((acc, curr, index) => {
                    if (index === action.payload.passengerIndex) {
                        return [...acc, action.payload.passenger];
                    } else {
                        return [...acc, curr];
                    }
                }, []),
            };
        }

        default:
            return state;
    }
};
