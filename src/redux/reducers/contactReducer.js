const initialState = [
  {
    id: 0,
    name: "Naomi Uwase",
    number: 1234567890,
    email: "unaomi188@gmail.com",
  },
  {
    id: 0,
    name: "test Name",
    number: 7894561230,
    email: "test@test.com",
  },
];
const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      state = [...state, action.payload];
      return state;
    case "UPDATE_CONTACT":
      const updateState = state.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );
      state = updateState;
      return state;
    case "DELETE_CONTACT":
      const filterContacts = state.filter(
        (contact) => contact.id !== action.payload && contact
      );
      state = filterContacts;
      return state;
    default:
      return state;
  }
};

export default contactReducer;
