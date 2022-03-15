import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from 'react'
import SignIn from "./components/pages/signin/SignIn";
import PrivateRoute from "./components/auth/PrivateRoute";
import Dashboard from "./components/admin/dashboard/Dashboard";
import ApartmentDetail from "./components/admin/DepartmentDetail";
import Profile from "./components/admin/profile/Profile";
import BillDetail from './components/admin/bill/BillModel'
import Service from "./components/admin/service/Service";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <SignIn />
                </Route>

                <Switch>
                    <PrivateRoute >
                            <Route exact path="/dashboard">
                                <Dashboard />
                            </Route>
                            <Route exact path="/profile">
                                <Profile />
                            </Route>
                            <Route exact path="/apartment">
                                <ApartmentDetail />
                            </Route>
                            <Route exact path="/bill/:id">
                                <BillDetail />
                            </Route>
                            <Route exact path="/service">
                                <Service />
                            </Route>

                    </PrivateRoute>
                </Switch>

            </Switch>
        </BrowserRouter>
    )
}

export default Routes