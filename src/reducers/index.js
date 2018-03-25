import { combineReducers } from 'redux';
import { OPEN_TASK_CREATE_DIALOG,
         HIDE_TASK_CREATE_DIALOG,
         ONLOAD_AGENT, ONLOAD_TASK,
         USE_AGENT } from '../actions';
import ioSocket from 'socket.io-client';
import { SOCKET_URL } from '../env/config';

const socket = ioSocket(SOCKET_URL);

const dialogInitialState = {
    taskCreateDialogVisible : false,
};
const modeInitialState = {
    agent : null
};

const modeReducers = (state = modeInitialState, action) => {
    switch (action.type) {
        case USE_AGENT :
            return Object.assign({}, state, {
               agent : action.diff
            });
        default :
            return state;
    }
}

const socketReducers = (state = socket, aciton) => {
    switch (aciton.type) {
        default: return state;
    }
}
const dialogReducers = (state = dialogInitialState, action) => {
    switch (action.type) {
        case OPEN_TASK_CREATE_DIALOG :
            return Object.assign({}, state, {
                taskCreateDialogVisible: action.diff
            });
        case HIDE_TASK_CREATE_DIALOG :
            return Object.assign({}, state, {
                taskCreateDialogVisible: action.diff
            });
        default :
            return state;
    }
}
const agentReducers = (state = [], action) => {
    switch (action.type) {
        case ONLOAD_AGENT :
            return state = action.diff;
        default :
            return state;
    }
}
const tasksReducers = (state = [], action) => {
    switch(action.type) {
        case ONLOAD_TASK :
            return state = action.diff;
        default :
            return state;
    }
}

export default combineReducers({
    dialogReducers,
    socketReducers,
    agentReducers,
    tasksReducers,
    modeReducers,
});