import axios from 'axios';

export const ADD_PASSENGER = 'ADD_PASSENGER ';
export const ADD_PASSENGER_SUCCESS = 'ADD_PASSENGER_SUCCESS';
export const ADD_PASSENGER_FAILURE = 'ADD_PASSENGER_FAILURE ';

export const addPassenger = (passenger, index) => {
    return {
        type: ADD_PASSENGER,
        payload: { passenger: passenger, passengerIndex: index },
    };
};
