import React from 'react'
import InputMask from 'react-input-mask'
import { connect } from 'react-redux';
import { onCloseModal, onOpenEdit, onEditContact, onSaveContact, onDeleteContact } from '../../redux/actions/app-actions';

const Modal = (props) => {
    const { data2, isEdit } = props;
    
    return data2 ? (
        <div className="modal">
            <div className="modal-window">
                {isEdit ? (
                    <>
                        <input 
                            type="text" 
                            placeholder="First Name" 
                            value={data2.firstName}
                            onChange={(e) => props.onEditContact(e.target.value,"firstName")}
                        />
                        <input 
                            type="text" 
                            placeholder="Last Name" 
                            value={data2.lastName}
                            onChange={(e) => props.onEditContact(e.target.value,"lastName")}
                        />
                        <InputMask 
                            mask="+(999)-999-99-99-99"
                            type="text" 
                            placeholder="Phone Number" 
                            value={data2.phoneNumber}
                            onChange={(e) => props.onEditContact(e.target.value,"phoneNumber")}>
                        </InputMask>
                        <button onClick={props.onSaveContact}>Save</button>
                    </>
                ) : (
                    <>
                        <h5>First Name: {data2.firstName}</h5>
                        <h5>Last Name: {data2.lastName}</h5>
                        <h5>Phone Number: {data2.phoneNumber}</h5>
                        <div className="btns">
                            <button onClick={props.onOpenEdit}>Edit</button>
                            <button onClick={props.onDeleteContact}>Delete</button>
                            <button onClick={props.onCloseModal}>Close</button>
                        </div>
                    </>
                )}
                
            </div>
        </div>
    ) : null;
}

const mapStateToProps = (state) => state.appReducer
const mapDispatchToProps =   dispatch => ({
    onCloseModal: () => dispatch(onCloseModal()),
    onOpenEdit: () => dispatch(onOpenEdit()),
    onEditContact: (value,field) => dispatch(onEditContact(value,field)),
    onSaveContact: () => dispatch(onSaveContact()),
    onDeleteContact: () => dispatch(onDeleteContact())
})

export default connect(mapStateToProps,mapDispatchToProps)(Modal);