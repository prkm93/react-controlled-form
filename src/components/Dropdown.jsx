import React from 'react';
import PropTyes from 'prop-types';

function Dropdown({title, name, options, value, controlFunc}) {
    return (
        <div className="form-group mt-4 w-50">
            <select 
                className="form-select mb-2" 
                aria-label="Default select example"
                name={name}
                value={value}
                onChange={controlFunc}
                >
                <option selected>{title}</option>
                {
                    options && options.length && options.map((option) => {
                        return <option  value={option} key={option}>{option}</option>
                    })
                }
            </select>
        </div>
    )
}

Dropdown.PropTyes = {
    title: PropTyes.string.isRequired, 
    name: PropTyes.string.isRequired,
    options: PropTyes.array.isRequired,
    value: PropTyes.string.isRequired,
    controlFunc: PropTyes.func.isRequired
}

export default Dropdown
