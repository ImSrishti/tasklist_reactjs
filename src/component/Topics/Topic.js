import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {gettopics} from '../../redux/selectors'

function Topic(props) {
    return (
        <div>
            
          { props.topicList.map((topic,index)=>(
              <Link to={`/home/tasks/${topic}`}  key={index}>
                  <div style={{"border":"1px solid black"}}>{topic}</div>
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
