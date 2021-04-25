import {combineReducers} from 'redux';
import currPage from './currPage';
import nav from './nav';
import section from './sectSelect';

const allReducers = combineReducers({
    nav:nav,
    currPage:currPage,
    sectionSelector:section
})
export default allReducers;
