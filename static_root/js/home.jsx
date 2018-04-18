import React, {Component} from 'react';

export default class Home extends Component {

    constructor() {
        super();
        this.state = {
            title: "My React Boilerplate",
            name: "Dennis Joel Mwagiru",
            role: "Full Stack Web Developer",
            link: "View Profile"
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h1 className="text-primary text-center panel-title">{this.state.title}</h1>
                </div>
                <div className="panel-body">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="panel panel-success">
                                <div className="panel-heading">
                                    <div className="row">
                                        <div className="col-xs-3">
                                            <i className="fa fa-address-card fa-5x"></i>
                                        </div>
                                        <div className="col-xs-9 text-right">
                                            <div className="huge">{this.state.name}</div>
                                            <div>{this.state.role}</div>
                                        </div>
                                    </div>
                                </div>
                                <a href="" >
                                    <div className="panel-footer">
                                        <span className="pull-left">{this.state.link}</span>
                                        <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>
                                        <diiv className="clearfix"></diiv>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}