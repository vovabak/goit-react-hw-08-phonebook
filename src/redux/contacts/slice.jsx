import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);        
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        const index = state.items.findIndex(item => item.id === action.payload.id)        
        state.items.splice(index, 1);        
      })
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContact.pending,
          deleteContact.pending
        ),
        handlePending
    )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContact.rejected,
          deleteContact.rejected
        ),
        handleRejected
    )
      .addMatcher(
        isAnyOf(
          fetchContacts.fulfilled,
          addContact.fulfilled,
          deleteContact.fulfilled
        ),
        state => {
          state.isLoading = false;        
          state.error = null;          
        }
    )
  }  
})


// const contactsSlice = createSlice({
//     name: 'contacts',
//     initialState: {
//         items: [],
//         isLoading: false,
//         error: null,
//     },   
//     extraReducers: {
//         [fetchContacts.pending]: handlePending,
//         [fetchContacts.fulfilled](state, action) {
//             state.isLoading = false;
//             state.error = null;
//           state.items = action.payload;          
//         },
//         [fetchContacts.rejected]: handleRejected,
//         [addContact.pending]: handlePending,
//         [addContact.fulfilled](state, action) {
//             state.isLoading = false;
//             state.error = null;
//           state.items.push(action.payload);          
//         },
//         [addContact.rejected]: handleRejected,
//         [deleteContact.pending]: handlePending,
//         [deleteContact.fulfilled](state, action) {            
//             state.isLoading = false;            
//             state.error = null;
//             const index = state.items.findIndex(item => item.id === action.payload.id)            
//             state.items.splice(index, 1);            
//         },
//         [deleteContact.rejected]: handleRejected,
//   },
// })

export const contactsReducer = contactsSlice.reducer;