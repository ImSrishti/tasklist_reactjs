import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { addTopic } from '../../redux/actions'
import { connect } from 'react-redux'

function AddTopic(props) {

    const [topic, settopic] = useState('')
    const [redirect, setRedirect] = useState(false)
    const saveContents = () => {
        props.addTopic(topic)
        setRedirect(true)
    }
    return (
        <div>
            <input onChange={(e) => { settopic(e.target.value) }} />
            <button onClick={saveContents}>Add</button>
            {redirect ? <Redirect to="/home" /> : null}
        </div>
    )
}

export default connect(null, { addTopic })(AddTopic)
