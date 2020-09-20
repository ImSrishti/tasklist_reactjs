import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {gettopics} from '../../redux/selectors'
import './Topic.css'
function Topic(props) {
    return (
        <div className="topic">
            
          { props.topicList.map((topic,index)=>(
              <Link to={`/home/tasks/${topic}`}  key={index}>
                  <button className="topic_button">{topic}</button>
               </Link>
          ))
        }
        
        </div>
    )
}

const mapStateToProps = (state) => {
    const topicList = gettopics(state)
    return {topicList}
}

export default connect(mapStateToProps,null)(Topic)
