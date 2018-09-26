import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Layout from './Layout'
import Home from './home'
import Stage1 from './Stages/stage1'

export default () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact component={Home} path="/" />
                <Route component={Stage1} path="/stage1" />
            </Switch>
        </Layout>
    </BrowserRouter>
)
