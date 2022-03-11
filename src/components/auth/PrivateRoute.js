import React from 'react'
import { Route,Redirect } from 'react-router-dom'
import { isAuthenticated } from '.';

const PrivateRoute = ({ children }) => {
    const { data } = isAuthenticated();
    return (
        <Route
            render={() =>
                isAuthenticated() && data.role_id == 2 ?
                    children
                    : (

                        < Redirect
                            to={{
                                pathname: "/"
                            }}
                        />
                    )
            }
        />
    );
}

export default PrivateRoute