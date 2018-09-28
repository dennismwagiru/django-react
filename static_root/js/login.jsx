import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {BounceLoader} from "react-spinners";

export default class Login extends Component {

    constructor() {
        super();
        this.state = {
            processing_form: false
        }
    }

    componentDidMount() {

    }

    static contextTypes = {
        router: PropTypes.object.isRequired,
    };

    signup(e) {
        e.preventDefault();
        this.context.router.replace('/app/setup/')
    }

    render() {

        // var button = <div className="col-lg-1 center-block">
        //     <button type="submit" className="btn btn-success">Login</button>
        // </div>;

        var button =
            <div className="center-block">
                <button className="btn btn-success" style={{display: 'block', margin: '0 auto 10px'}}>Login</button>
            </div>
        ;

        if (this.state.processing_form) {
            button =
                <div className="panel-content pull-right">
                    <BounceLoader
                        color={'#5cb85c'}
                    />
                </div>
            ;
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-4 col-sm-offset-3 col-md-offset-4">
                        <div className="panel panel-success voffset9">
                            <div className="panel-heading"><strong>Login</strong></div>
                            <div className="panel-body">
                                <form>
                                    <fieldset>
                                        <div className="row">
                                            <div className="center-block">
                                                <img className="profile-img"
                                                     src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120"
                                                     alt="" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-group panel-content">
                                                <div className="input-group">
                                                    <span className="input-group-addon">
                                                        <i className="glyphicon glyphicon-user" />
                                                    </span>
                                                    <input type="text" className="form-control" placeholder="Username" autoFocus/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-group panel-content">
                                                <div className="input-group">
                                                    <span className="input-group-addon">
                                                        <i className="glyphicon glyphicon-lock" />
                                                    </span>
                                                    <input type="password" className="form-control" placeholder="Password" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            {button}
                                        </div>
                                    </fieldset>
                                </form>
                            </div>
                            <div className="panel-footer">
                                Don't have an account yet. <a href="" onClick={this.signup.bind(this)}>Signup here.</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}