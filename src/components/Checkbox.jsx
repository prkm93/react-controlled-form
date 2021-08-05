import React from 'react'

function Checkbox({title, petOptions, type, controlFunc}) {
    return (
        <div className="mt-4">
            <label htmlFor="Pets" className="form-label">{title}</label>
            <div>
            {
                petOptions && petOptions.length && petOptions.map(pet => {
                   return (
                    <div class="form-check form-check-inline">
                        <input 
                            class="form-check-input" 
                            type={type}
                            id={pet} 
                            value={pet}
                            // checked={}
                            onChange={controlFunc} 
                            />
                        <label class="form-check-label" htmlFor={pet}>
                            {pet}
                        </label>
                    </div>
                   )
                })
            }
            </div>
            {/* <div class="form-check">
                <input class="form-check-input" type="checkbox" value="Cat" id="Cat"/>
                <label class="form-check-label" for="Cat">
                    Cat
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="Rabbit" id="Rabbit"/>
                <label class="form-check-label" for="Rabbit">
                    Rabbit
                </label>
            </div> */}
        </div>
    )
}

export default Checkbox
