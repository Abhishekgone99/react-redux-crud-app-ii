import { ADD_STUDENT, DELETE_STUDENT, EDIT_STUDENT } from "./actionTypes"

export const addStudent = (data) => {
    return {
        type: ADD_STUDENT,
        payload: data
    }
}

export const editStudent = (data) => {

    return {
        type: EDIT_STUDENT,
        payload: data
    }
}

export const deleteStudent = (id) => {
    return {
        type: DELETE_STUDENT,
        id
    }
}