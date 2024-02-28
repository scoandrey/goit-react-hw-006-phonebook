import { createSlice } from "@reduxjs/toolkit";


 const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload)
    },
    deleteContact(state, action) {},
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactReducer = contactsSlice.reducer;
