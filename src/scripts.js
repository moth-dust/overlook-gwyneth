
import { apiCall} from './apiCalls';
import './css/styles.scss';
import './domUpdates'

console.log('This is the JavaScript entry file - your code begins here.');
export const apiData = apiCall()
export const dataModel ={
    user: {},
    trackedBookings: {}
}
