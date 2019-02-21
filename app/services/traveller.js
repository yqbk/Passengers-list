import axios from 'axios';
import { getTraveller, getTravellerSuccess, getTravellerFailure } from '../actions/travellerActions';

const API = 'https://functionapp20180527095701.azurewebsites.net/api/GetUserTravellerInfo';

export function getTravellerRequest() {
    return function action(dispatch) {
        dispatch(getTraveller(true));

        const request = axios({
            method: 'GET',
            url: API,
            headers: [],
        });

        return request.then(response => dispatch(getTravellerSuccess(response.data)), err => dispatch(getTravellerFailure(err)));
    };
}
