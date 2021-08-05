import React from 'react'
import FormContainer from './components/FormContainer'
import './style.css'

function App() {
    return (
        <div className="container">
            <h1 className="text-center">ReactJs Controlled Form Component</h1>
            <div className="row">
                <div className="col col-lg-8 box">
                    <FormContainer/>
                </div>
            </div>
        </div>
    )
}

export default App
