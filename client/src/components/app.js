import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from './context'
import Layout from './Layout'
import Home from './home'
import { Stage1, Stage2 } from './Stages'
import { Add, Myevents } from './Manage'

<<<<<<< HEAD
export default () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact component={Home} path="/" />
                <Route component={Stage1} path="/stage1" />
                <Route component={Stage2} path="/stage2" />
                <Route component={Add} path="/add" />
               	<Route component={Myevents} path="/myevents" />
            </Switch>
        </Layout>
    </BrowserRouter>
)

