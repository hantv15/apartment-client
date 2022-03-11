import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from 'react'
import SignIn from "./components/pages/signin/SignIn";
import PrivateRoute from "./components/auth/PrivateRoute";
import Dashboard from "./components/admin/dashboard/Dashboard";
import Apartment from "./components/admin/apartment/Apartment";
import Profile from "./components/admin/profile/Profile";
import { UserContext } from "./components/context/Context";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <SignIn />
                </Route>

                <Switch>
                    <PrivateRoute >
                        <UserContext.Provider>
                            <Route exact path="/dashboard">
                                <Dashboard />
                            </Route>
                            <Route exact path="/profile">
                                <Profile />
                            </Route>
                            <Route exact path="/apartment">
                                <Apartment />
                            </Route>
                        </UserContext.Provider>

                    </PrivateRoute>
                </Switch>

            </Switch>
        </BrowserRouter>
    )
}

export default Routes