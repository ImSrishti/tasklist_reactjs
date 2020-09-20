import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { addTopic } from '../../redux/actions'
import { connect } from 'react-redux'
import './AddTopic.css'
function AddTopic(props) {

    const [topic, settopic] = useState('')
    const [redirect, setRedirect] = useState(false)
    const saveContents = () => {
        props.addTopic(topic)
        setRedirect(true)
    }
    return (
        <div className="addTopics">
            <input className="topic_input_box" onChange={(e) => { settopic(e.target.value) }} />
            <button className="addtopicbutton" onClick={saveContents}>Add</button>
            {redirect ? <Redirect to="/home" /> : null}
        </div>
    )
}

export default connect(null, { addTopic })(AddTopic)
