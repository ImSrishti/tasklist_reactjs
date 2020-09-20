import React from 'react'
import { Link, Switch } from 'react-router-dom'
import RouteWithSubRoutes from '../../routerconfig/routewithsubroutes'
import Topic from './Topic'

function Topics({routes}) {
    return (
        <div>
            <Link to="/addtopic"><button>Add Topic</button></Link>
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
