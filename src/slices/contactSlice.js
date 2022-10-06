import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import delay from "../components/delay";
import { contactData } from "../data/contactData";


export const fetchContacts = createAsyncThunk("contacts/fetchContacts", async () => {
  const ContactsDelay = await delay(contactData);
  return ContactsDelay;
});
export const fetchContact = createAsyncThunk("contacts/fetchcontact", async (id) => {
  const contactDelay = await delay(contactData.find((contact) => contact.id === id));
  return contactDelay;
});
export const createContact = createAsyncThunk("contacts/createcontact", async (newContact) => {
    const contactDelay = await delay(newContact);
    return contactDelay;
  });
export const updateContact = createAsyncThunk("contacts/updatecontact", async (id) => {
    const contactDelay = await delay(contactData.find((contact) => contact.id === id));
    return contactDelay;
  });
  export const deleteContact = createAsyncThunk("contacts/deletecontact", async (id) => {
    const contactDelay = await delay(contactData.find((contact) => contact.id === id));
    return contactDelay;
  });
  

const contactsListSlice = createSlice({
  name: "contactsList",
  initialState: {
    contacts: [],
    contact: null,
    isLoading: false,
    hasError: false,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.isLaoding = true;
        state.hasError = false;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.contacts = action.payload;
      })
      .addCase(fetchContacts.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      })
      .addCase(fetchContact.pending, (state) => {
        state.isLaoding = true;
        state.hasError = false;
        state.contact = null;
      })
      .addCase(fetchContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.contact = action.payload;
      })
      .addCase(fetchContact.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
        state.contact = null;
      })
     .addCase(createContact.pending, (state) => {
        state.isLaoding = true;
        state.hasError = false;
      })
      .addCase(createContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.contacts.push(action.payload) // state.Contacts = [...state.Contacts, action.payload]
      })
      .addCase(createContact.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      })
  },
});

export default contactsListSlice.reducer;
export const selectContacts = (state) => state.contactsList.contacts;
export const selectContact = (state) => state.contactsList.contact;
