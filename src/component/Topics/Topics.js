import React from 'react'
import { Link, Switch } from 'react-router-dom'
import RouteWithSubRoutes from '../../routerconfig/routewithsubroutes'
import Topic from './Topic'
import './Topics.css'
function Topics({routes}) {
    return (
        <div className="topics">
            <Link to="/addtopic"><div className="addtopic">Add Topic</div></Link>
            
            <Topic />

            <Switch>
                {routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route} />
                ))}
            </Switch>

        </div>
    )
}

export default Topics
