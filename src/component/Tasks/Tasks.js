import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { addTask,completeTask } from '../../redux/actions'
import { connect } from 'react-redux'
import { gettasks } from '../../redux/selectors'

function Tasks(props) {

    let { id } = useParams();
    const [task, settask] = useState({ completed: false, taskcontent: '' })

    const handletask = (temp) => {
        settask({
            ...task,
            taskcontent: temp
        })
    }

    const saveTasks = () => {
        const temp = { "name": id, task: {completed:false,taskcontent:task.taskcontent} }
        props.addTask(temp)
    }
    const completeTask = (t) => {
        const temp = { "name": id, task: t}
        props.completeTask(temp)
    }
    return (
        <div>
            <input onChange={(e) => handletask(e.target.value)} />
            <button onClick={saveTasks}>Add tasks</button>

            {props.topicList[id].tasklist.map((task, index) => (
              task.completed? null :
              <div>Not Completed:{task.taskcontent}
                <button onClick={()=>completeTask(task.taskcontent)}>Done</button>
            </div>
            ))}
            {props.topicList[id].tasklist.map((task, index) => (
              task.completed? 
                <div>Completed:{task.taskcontent}
                </div>
                :null
            ))}

        </div>
    )
}
const mapStateToProps = (state) => {
    const topicList = gettasks(state)
    return { topicList }
}

export default connect(mapStateToProps, { addTask ,completeTask})(Tasks)
