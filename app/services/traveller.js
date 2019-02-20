import axios from 'axios';
import { getTraveller, getTravellerSuccess, getTravellerFailure } from '../actions/travellerActions';

const API = 'https://functionapp20180527095701.azurewebsites.net/api/GetUserTravellerInfo';

export const getTravellerRequest = () => {
    return dispatch => {
        console.log('dispatch axios')
        dispatch(getTraveller(true));
        axios
            .get(API)
            .then(res => {
                console.log('api request', res)
                dispatch(getTravellerSuccess(res));
            })
            .catch(err => dispatch(getTravellerFailure(err)));
    };
};
