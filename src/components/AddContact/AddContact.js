import React from 'react';
import InputMask from 'react-input-mask'
import { connect } from 'react-redux';
import { onChangeAddContact, onAddContact } from '../../redux/actions/app-actions';

const AddContact =(props) =>{
    return(
        <div className="add-task">
            <label>Имя</label>
            <input value={props.firstName} onChange={(e) => props.onChangeAddContact(e.target.value,'firstName')}></input>
            <label>Фамилия</label>
            <input value={props.lastName} onChange={(e) => props.onChangeAddContact(e.target.value,'lastName')}></input>
            <label>Номер Телефона</label>
            <InputMask  mask="+(999)-999-99-99-99"  value={props.phoneNumber}  onChange={(e) => props.onChangeAddContact(e.target.value,'phoneNumber')}></InputMask>
            <button onClick={props.onAddContact}>Add</button>
        </div>
    )

}

 const mapStateToProps = (state) => state.appReducer

 const mapDispatchToProps = dispatch =>({
     onChangeAddContact: (value,field) => dispatch(onChangeAddContact(value,field)),
     onAddContact: () => dispatch(onAddContact())
 })

export default connect(mapStateToProps,mapDispatchToProps)(AddContact);