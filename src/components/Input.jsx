import React from 'react';
import PropTypes from 'prop-types';

function Input({title, inputType, name, placeholder, content, controlFunction}) {
    
    return (
        <div className="form-group">
            <label htmlFor="Name" className="form-label mb-2">{title}</label>
            <input 
                type={inputType} 
                className="form-control"
                name={name} 
                id="name" 
                placeholder={placeholder}
                value={content}
                onChange={controlFunction}
            />
        </div>
    )
}

Input.propTypes = {
    inputType: PropTypes.oneOf(['input', 'number']).isRequired,
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    controlFunction: PropTypes.func.isRequired
}

export default Input;
