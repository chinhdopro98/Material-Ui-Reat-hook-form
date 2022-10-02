import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Create from './pages/create'
import HookForm from './pages/FormHome'
import { CustomerProvider } from './context/CustomerContext'
import Summery from './pages/summery'
function App() {
    return (
        <div>
            <CustomerProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' exact element={<Home />}></Route>
                        <Route path="/create" exact element={<Create />}></Route>
                        <Route path="/summary" exact element={<Summery />}></Route>
                        <Route path="/hookform" exact element={<HookForm />}></Route>
                    </Routes>
                </BrowserRouter>
            </CustomerProvider>
        </div>
    )
}

export default App