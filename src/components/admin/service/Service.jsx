import React from 'react'
import Content from '../../core/Content'

const Service = () => {
    return (
        <>
            <Content>
                <div className=" container">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Feeds</h4>
                        </div>
                        <ul className="feeds p-b-20">
                            <li>
                                <div className="bg-info"><i className="fa fa-bell-o" /></div> You have 4 pending tasks.
                                <span className="text-
muted">Just Now</span>
                            </li>
                            <li>
                                <div className="bg-success"><i className="ti-server" /></div> Server #1 overloaded.<span className="text-muted">2 Hours ago</span>
                            </li>
                            <li>
                                <div className="bg-warning"><i className="ti-shopping-cart" /></div> New order
                                received.<span className="text-muted">31 May</span>
                            </li>
                            <li>
                                <div className="bg-danger"><i className="ti-user" /></div> New user registered.<span className="text-muted">30 May</span>
                            </li>
                            <li>
                                <div className="bg-dark"><i className="fa fa-bell-o" /></div> New Version just arrived.
                                <span className="text-muted">27 May</span>
                            </li>
                            <li>
                                <div className="bg-info"><i className="fa fa-bell-o" /></div> You have 4 pending tasks.
                                <span className="text-muted">Just Now</span>
                            </li>
                            <li>
                                <div className="bg-danger"><i className="ti-user" /></div> New user registered.<span className="text-muted">30 May</span>
                            </li>
                            <li>
                                <div className="bg-dark"><i className="fa fa-bell-o" /></div> New Version just arrived.
                                <span className="text-muted">27 May</span>
                            </li>
                        </ul>
                    </div>
                </div>


            </Content>
        </>
    )
}

export default Service