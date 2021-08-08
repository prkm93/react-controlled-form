import React, {useState} from 'react'
import Checkbox from './Checkbox'
import Dropdown from './Dropdown'
import Input from './Input'
import InputNumber from './InputNumber'
import Radio from './Radio'
import Textbox from './Textbox'

function FormContainer() {

    const [ownerName, setOwnerName] = useState('');
    const [ageRange] = useState(['18-25', '25-59', '60 or older']);
    const [selectedAgeRange, setSelectedAgeRange] = useState('');
    const [pets] = useState(['Dog', 'Rabbit', 'Pony', 'Fish', 'Cat', 'Iguana', 'Mouse', 'Bird', 'Cow']);
    const [adoptPet, setAdoptPet] = useState([]);
    const [siblingOptions, setSiblingOptions] = useState('');
    const [currentOwnedPets, setCurrentOwnedPets] = useState(0);
    const [petDetails, setPetDetails] = useState('');


    const handlePetAdopt = () => {

    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("submit");
    }

    return (
        <div>
            <h3>Pet Adoption Form</h3>
            <form onSubmit={handleFormSubmit}>
                <Input
                    title={'Full Name'}
                    inputType={'text'}
                    name={'ownerName'}
                    placeholder={'Please enter your name'}
                    value={ownerName}
                    controlFunction={e => setOwnerName(e.target.value)}
                />
                <Dropdown
                    title={'Choose your age group:'}
                    name={'ageRange'}
                    options={ageRange}
                    value={selectedAgeRange}
                    controlFunc={e => setSelectedAgeRange(e.target.value)}
                />
                <Checkbox
                    title={'Which kinds of pets would you like to adopt?'}
                    petOptions={pets}
                    type={'checkbox'}
                    controlFunc = {handlePetAdopt}
                />
                <Radio
                 title={'Which kinds of pets would you like to adopt?'}
                 petOptions={pets}
                 type={'checkbox'}
                 controlFunc = {handlePetAdopt}
                 />
                <InputNumber
                title={'Which kinds of pets would you like to adopt?'}
                petOptions={pets}
                type={'checkbox'}
                controlFunc = {handlePetAdopt}
                />
                <Textbox
                title={'Which kinds of pets would you like to adopt?'}
                petOptions={pets}
                type={'checkbox'}
                controlFunc = {handlePetAdopt}
                />

                <button className="btn btn-primary"
                title={'Which kinds of pets would you like to adopt?'}
                petOptions={pets}
                type={'checkbox'}
                controlFunc = {handlePetAdopt}
                >Submit</button>
            </form>
        </div>
    )
}

export default FormContainer;
