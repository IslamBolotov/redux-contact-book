import * as axios from 'axios'

var instance = axios.create({
  baseURL: `http://localhost:8000/`
});

export const ContactAPI = {
    getContactData(){
      return instance.get(`todos`)
    },
    postContact(contact){
      return instance.post(`todos`,contact)
    },
    deleteContact(id){
      return instance.delete(`todos/${id}`)
    },
    changeContact(contact){
      return instance.put(`todos/${contact.id}`,contact)
    },
    getContactWithID(id){
      return instance.get(`todos/${id}`)
    }
}