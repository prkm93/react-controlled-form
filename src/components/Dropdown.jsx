import React from 'react'

function Dropdown() {
    return (
        <div className="form-group mt-2 w-50">
            <select className="form-select mb-2" aria-label="Default select example">
                <option selected>Choose your age group:</option>
                <option value="1">18-25</option>
                <option value="2">25-59</option>
                <option value="3">60 or older</option>
            </select>
        </div>
    )
}

export default Dropdown
