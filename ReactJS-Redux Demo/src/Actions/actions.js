import axios from "axios";

export const employeeGetAll = (employees) => {
    console.log('get all', employees);
    return {
        type: 'employee/getAll', // reducer
        data: employees
    }
}

// export const getEmp = (id) => {
//     return async function(dispatch, getState) {
//         await axios.get("http://localhost:8080/employee/api/" + id)
//         .then(data => {
//             console.log(data);
//             return dispatch({
//                 type: "employee/getById",
//                 data: data.data
//             });
//         });
//     };
// }

// export const empDelete = (id) => {
//     return async function(dispatch, getState) {
//         await axios.delete("http://localhost:8080/employee/api/" + id)
//         .then(data => {
//             console.log("delete", data);
//             return dispatch(employeeFetchAll());
//         });
//     };
// }

// export const empUpdate = (employee) => {
//     return async function(dispatch, getState) {
//         await axios.post("http://localhost:8080/employee/api/",  employee)
//         .then(data => {
//             console.log(data);
//         });
//     };
// }

export const empAdd = (employee) => {
    if (employee) {
        return async function(dispatch, getState) {
            console.log(employee)
            await axios.post("http://localhost:8080/emp/add",employee)
            .then(data => {
                console.log(data);
            });
        };
    }
}

export const employeeFetchAll = () => {
    return async function(dispatch, getState) {        
            await axios.get("http://localhost:8080/emp/get")
            .then(data => {
                console.log(data);
                return dispatch(employeeGetAll(data.data));
            });
    };
}