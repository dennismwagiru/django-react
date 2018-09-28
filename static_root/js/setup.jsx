import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {BounceLoader} from 'react-spinners';

export default class Setup extends Component {

    constructor() {
        super();
        this.state = {
            processing_form: false,
            name: '',
            slogan: '',
            address: '',
            postal_code: '',
            town: '',
            county: '',
            phone: '',
            email: '',
            counties: []
        }
    }

    componentDidMount() {
    }

    static contextTypes = {
        router: PropTypes.object.isRequired,
    };

    editName(e) {
        e.preventDefault();
        this.setState({
            name: this.refs.name.value,
            slogan: this.refs.slogan.value,
            address: this.refs.address.value,
            postal_code: this.refs.address.value,
            town: this.refs.town.value,
            county: this.refs.county.value,
            phone: this.refs.phone.value,
            email: this.refs.email.value,
        });
    }

    login(e) {
        e.preventDefault();
        this.context.router.replace('/app/login/')
    }

    render() {
        var counties = this.state.counties.map(function (county) {
            return {value: county.id, label: county.name}
        });

        var button = <div className="panel-content pull-right">
            <button type="submit" className="btn btn-success">Submit</button>
        </div>;

        if (this.state.processing_form) {
            button = <div className="panel-content pull-right">
                <BounceLoader
                    color={'#5cb85c'}
                />
            </div>;
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="panel panel-success voffset4">
                            <div className="panel-heading"><strong>Initial Setup</strong></div>
                            <div className="panel-body">
                                <form>
                                    <fieldset>
                                        <div className="row">
                                            <div className="center-block">
                                                <img className="profile-img"
                                                     src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120"
                                                     alt="" />
                                                <div className="center-text">
                                                    <div className="big-name"><strong>{this.state.name}</strong></div>
                                                    <div className="slogan">{this.state.slogan}</div>
                                                    <address>
                                                        P.O Box {this.state.address} - {this.state.postal_code},<br />
                                                        {this.state.town}.<br />
                                                        P: (+254) {this.state.phone}<br />
                                                        <br />
                                                        <a href={"mailto:" +this.state.email}>{this.state.email}</a>
                                                    </address>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group panel-content">
                                                    <div className="input-group">
                                                        <span className="input-group-addon">
                                                            <i className="glyphicon glyphicon-edit" />
                                                        </span>
                                                        <input type="text" className="form-control" name="name" ref="name" placeholder="Company Name" autoFocus required onChange={this.editName.bind(this)}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group panel-content">
                                                    <div className="input-group">
                                                        <span className="input-group-addon">
                                                            <i className="glyphicon glyphicon-bookmark" />
                                                        </span>
                                                        <input type="text" className="form-control" name="slogan" ref="slogan" placeholder="Slogan" required onChange={this.editName.bind(this)}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group panel-content">
                                                    <div className="input-group">
                                                        <span className="input-group-addon">
                                                            <i className="" />
                                                        </span>
                                                        <input type="number" className="form-control" name="address" ref="address" placeholder="Address" required onChange={this.editName.bind(this)}  />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group panel-content">
                                                    <div className="input-group">
                                                        <span className="input-group-addon">
                                                            <i className="" />
                                                        </span>
                                                        <input type="number" className="form-control" name="postal_code" ref="postal_code" placeholder="Postal Code" required onChange={this.editName.bind(this)} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group panel-content">
                                                    <div className="input-group">
                                                        <span className="input-group-addon">
                                                            <i className="" />
                                                        </span>
                                                        <input type="text" className="form-control" name="town" ref="town" placeholder="Town" required onChange={this.editName.bind(this)} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group panel-content">
                                                    <div className="input-group">
                                                        <span className="input-group-addon">
                                                            <i className="" />
                                                        </span>
                                                        <select className="form-control" name="county" ref="county" required onChange={this.editName.bind(this)} >
                                                            <option>Select County</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group panel-content">
                                                    <div className="input-group">
                                                        <span className="input-group-addon">
                                                            <i>254</i>
                                                        </span>
                                                        <input type="number" className="form-control" name="phone" ref="phone" placeholder="Phone Number" required onChange={this.editName.bind(this)}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group panel-content">
                                                    <div className="input-group">
                                                        <span className="input-group-addon">
                                                            <i className="glyphicon glyphicon-user" />
                                                        </span>
                                                        <input type="email" className="form-control" name="email" ref="email" placeholder="Email" required onChange={this.editName.bind(this)} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group panel-content">
                                                    <div className="input-group">
                                                    <span className="input-group-addon">
                                                        <i className="glyphicon glyphicon-user" />
                                                    </span>
                                                        <input type="text" className="form-control" placeholder="Username" required/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group panel-content">
                                                    <div className="input-group">
                                                    <span className="input-group-addon">
                                                        <i className="glyphicon glyphicon-lock" />
                                                    </span>
                                                        <input type="password" className="form-control" placeholder="Password" />
                                                    </div>
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
                                Already have an account yet. <a href="" onClick={this.login.bind(this)}>Login here.</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}