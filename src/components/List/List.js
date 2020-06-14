import React from 'react';
import Card from './Card';
import { connect } from 'react-redux';
import { getContacts, onOpenModal } from '../../redux/actions/app-actions';
import Modal from '../Modal/Modal'

class List extends React.Component{
    
    componentDidMount(){
        this.props.getContacts()
    }

    render(){
        const { data } = this.props
        return(
            <>
            <Modal  />
                <ul>
                    {data.map((contact,index) => (
                        <Card 
                            key = {contact.id}
                            contact = {contact}
                            onOpenModal = {() => this.props.onOpenModal(contact.id)}
                        />
                    ))}
                </ul>
            </>
        )
    }
}


const mapStateToProps = (state) => state.appReducer
const mapDispatchToProps =   dispatch => ({
    getContacts: () => dispatch(getContacts()),
    onOpenModal: (id) => dispatch(onOpenModal(id)) 
})

export default connect(mapStateToProps,mapDispatchToProps)(List);