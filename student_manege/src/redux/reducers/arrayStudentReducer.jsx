
// If State is Reference value {object, arry} then must [...state] (clone value to new address - change state)

// const stateDefault = [
//     { IDStudent: 'macmac', Name: "456", PhoneNumber: "89653682225", Email: "caoducmanh2411999@gmail.com" },
//     { IDStudent: 'miemie', Name: "678", PhoneNumber: "89653682226", Email: "caoducmanh@gmail.com" }]

const stateDefault = {
    arrayDefaultStudents: [
        { IDStudent: '456', Name: "macmac", PhoneNumber: "89653682225", Email: "caoducmanh2411999@gmail.com" },
        { IDStudent: '678', Name: "miemie", PhoneNumber: "89653682226", Email: "caoducmanh@gmail.com" }],
    choosenStudent: [{IDStudent: 'IDStudent', Name: "Name", PhoneNumber: "PhoneNumber", Email: "Email"}]
}


export const arrayStudentReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'ADD_NEW_STUDENT': {
            state.push(action.payload);
            return {...state}; // immutable of redux
        };

        case 'DELETE_STUDENT': {
            // let arrayStudentTemp = state.arrayDefaultStudents;
            // arrayStudentTemp.splice(action.payload, 1);
            // state.arrayDefaultStudents = arrayStudentTemp;

            state.arrayDefaultStudents.splice(action.payload, 1);
            console.log('after handle delete', state);
            return {...state}; // immutable of redux
        };

        case 'UPDATE_STUDENT': {
            state.choosenStudent = action.payload;
            console.log('choosenStudent', state.choosenStudent);
            return {...state}; // immutable of redux
        }

        default: return state;
    }
}