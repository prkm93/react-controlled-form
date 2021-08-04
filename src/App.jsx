import React from 'react'
import Checkbox from './components/Checkbox'
import Dropdown from './components/Dropdown'
import Input from './components/Input'
import InputNumber from './components/InputNumber'
import Radio from './components/Radio'
import Textbox from './components/Textbox'
import './style.css'

function App() {
    return (
        <div className="container">
            <h1 className="text-center">ReactJs Controlled Form Component</h1>
            <div className="row">
                <div className="col col-lg-8 box">
                    <h3>Pet Adoption Form</h3>
                    <Input/>
                    <Dropdown/>
                    <Checkbox/>
                    <Radio/>
                    <InputNumber/>
                    <Textbox/>
                    <button className="btn btn-primary">Submit</button>
                </div>
            </div>
        </div>
    )
}

export default App
