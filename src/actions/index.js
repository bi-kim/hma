export const OPEN_TASK_CREATE_DIALOG = "OPEN_TASK_CREATE_DIALOG";
export function openTaskCreateDialog () {
    return {
        type: OPEN_TASK_CREATE_DIALOG,
        diff: true
    }
}
export const HIDE_TASK_CREATE_DIALOG = "HIDE_TASK_CREATE_DIALOG";
export function hideTaskCreateDialog () {
    return {
        type: HIDE_TASK_CREATE_DIALOG,
        diff: false
    }
}
export const ONLOAD_AGENT = "ONLOAD_AGENT";
export function onloadAgent (value) {
    return {
        type: ONLOAD_AGENT,
        diff: value
    }
}
export const ONLOAD_TASK = "ONLOAD_TASK";
export function onloadTask (value) {
    return {
        type: ONLOAD_TASK,
        diff: value
    }
}
export const USE_AGENT = "USE_AGENT";
export function useAgent (value) {
    return {
        type: USE_AGENT,
        diff: value
    }
}