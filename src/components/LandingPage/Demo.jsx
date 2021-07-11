import React from 'react'

const Demo = () => {
    return (
        <div id='quiz' className='Demo'>
            <h1>DEMO SESSION</h1>
            <div id='quiz_form'>
                <div>
                    <input type="text" id='classInput' placeholder="Enter the class"/>
                </div>
                <div>
                    <input type="text" id='boardInput' placeholder="Enter the board"/>
                </div>
            </div>
            <button id='submitButton' type='submit'>SUBMIT</button>
        </div>
    )
}

export default Demo
