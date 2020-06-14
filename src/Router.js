import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar'
import List from './components/List/List';
import AddContact from './components/AddContact/AddContact';

const Router = () =>{
    return(
        <BrowserRouter>
            <NavBar />
            <Route path="/" exact  component={()=>(
                <>
                    <AddContact />
                    <List />
                </>
            )} />
            <Route path="/add" component={()=> <AddContact />} />
            
        </BrowserRouter>
    )
}

export default Router;