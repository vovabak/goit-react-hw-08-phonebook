import { createSelector } from "@reduxjs/toolkit";
import { selectFilter } from "redux/filter/selectors";

export const selectContacts = state => state.contacts;

export const selectVisibleContacts = createSelector([selectContacts, selectFilter], (contacts, filter) => {
    
    return contacts.items.filter(item =>
        item.name.toLowerCase().includes(filter.toLowerCase().trim()));
})