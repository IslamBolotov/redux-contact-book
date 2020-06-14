
import { ContactAPI } from '../../api/api';

const setContacts = (data) =>({
  type:'SET_DATA',
  payload: data
});

const setContactsForModal = (data) =>({
  type:'SET_DATA_FOR_MODAL',
  payload: data
});

const setEditStatus = (status) =>({
  type:'SET_EDIT_STATUS',
  payload: status
});

const setNewContact = (data,field) =>({
  type:field,
  payload: data
});

export const getContacts  =  () =>  async (dispatch) =>{
  const { data } = await ContactAPI.getContactData();
  dispatch(setContacts(data))
}

export const onOpenModal = (id) => async (dispatch,getState) =>{
  const { data } = await ContactAPI.getContactWithID(id)
  dispatch(setContactsForModal(data))
}

export const onCloseModal = () => (dispatch) =>{
  dispatch(setContactsForModal(null))
  dispatch(getContacts())
}

export const onOpenEdit = () => (dispatch) =>{
  dispatch(setEditStatus(true))
}

export const onEditContact = (value,field) => (dispatch,getState) =>{
  
  const newData = {...getState().appReducer.data2}
  newData[field] = value
  dispatch(setContactsForModal(newData))
}

export const onSaveContact = () => async (dispatch,getState) =>{
  const data2 = {...getState().appReducer.data2}
  await ContactAPI.changeContact(data2);
  dispatch(setEditStatus(false))
}

export const onDeleteContact = () => async (dispatch,getState) =>{
  const { data2 } = getState().appReducer
  await ContactAPI.deleteContact(data2.id)
  dispatch(onCloseModal());
}  

export const onChangeAddContact = (value,field) => (dispatch,getState) =>{
  
  const newData = {...getState().appReducer}
  newData[field] = value
  dispatch(setNewContact(newData[field],field))
}

export const onAddContact = () => async (dispatch,getState) =>{
  const { firstName, lastName, phoneNumber } = getState().appReducer
  await ContactAPI.postContact({ firstName, lastName, phoneNumber })
  dispatch(setNewContact('','firstName'))
  dispatch(setNewContact('','lastName'))
  dispatch(setNewContact('','phoneNumber'))
  dispatch(getContacts())
} 




