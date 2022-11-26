
// If State is Reference value {object, arry} then must [...state] (clone value to new address - change state)

const stateDefault = [
    { IDStudent: 'macmac', Name: "456", PhoneNumber: "89653682225", Email: "caoducmanh2411999@gmail.com" },
    { IDStudent: 'miemie', Name: "678", PhoneNumber: "89653682226", Email: "caoducmanh@gmail.com" }
]

export const arrayStudentReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'ADD_NEW_STUDENT': {
            state.push(action.payload);
            return [...state]; // immutable of redux
        }

        default: return state;
    }
}