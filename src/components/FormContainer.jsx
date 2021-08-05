import React, {useState} from 'react'
import Checkbox from './Checkbox'
import Dropdown from './Dropdown'
import Input from './Input'
import InputNumber from './InputNumber'
import Radio from './Radio'
import Textbox from './Textbox'

function FormContainer() {

    const [ownerName, setOwnerName] = useState('');
    const [ageRange, setAgeRange] = useState([]);
    const [adoptPet, setAdoptPet] = useState([]);
    const [siblingOptions, setSiblingOptions] = useState('');
    const [currentOwnedPets, setCurrentOwnedPets] = useState(0);
    const [petDetails, setPetDetails] = useState('');


    return (
        <div>
            <h3>Pet Adoption Form</h3>
            <form>
                <Input
                    title={'Full Name'}
                    inputType={'text'}
                    name={'ownerName'}
                    placeholder={'Please enter your name'}
                    value={ownerName}
                    controlFunction={e => setOwnerName(e.target.value)}
                />
                <Dropdown/>
                <Checkbox/>
                <Radio/>
                <InputNumber/>
                <Textbox/>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default FormContainer;
