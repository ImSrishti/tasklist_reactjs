import React from 'react'
import {
    BrowserRouter as Router,
    Switch
} from "react-router-dom";

import Topics from '../component/Topics/Topics'
import AddTopic from '../component/Topics/AddTopic';
import Tasks from '../component/Tasks/Tasks'
import RouteWithSubRoutes from './routewithsubroutes'

const routes = [

    {
        path: "/home",
        component: Topics,
        routes: [
            { path: "/home/tasks/:id", component: Tasks }
        ]
    },
    {
        path: "/addtopic",
        component: AddTopic,
        routes: []
    }

];


export default function RouterConfig() {

    return (
        <div>

            <Router>
                <Switch>
                    {routes.map((route, i) => (
                        <RouteWithSubRoutes key={i} {...route} />
                    ))}
                </Switch>
            </Router>

        </div>
    )

}

