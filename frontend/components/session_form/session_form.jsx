import React from 'react';

class SessionForm extends React.Component {
    constructor(props){
        super(props);
        this.state = { email: "", password: "" }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field){
        return e => this.setState ({
            [field]: e.target.value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(() => this.props.history.push("/users"));
    }

    handleDemo(){
        if (this.props.formType === "Login to PXtures"){
            return(
                <input className="demo-submit"
                    onClick={(e) => {
                        e.preventDefault();
                        const demo = {email: "demo1@email.com", password: "password"};
                        this.props.processForm(demo).then(() => this.props.history.push("/users"));
                        }
                    }
                    type="submit"
                    value="Demo Login"
                    />
            )
        }
    }
    
    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className="main-pages">
                <div className="login-form-container">
                    <form onSubmit={this.handleSubmit} className="login-form-box">
                        <div className="overall-form">
                            <br />
                            <div className="login-header">
                                {this.props.formType}
                            </div>
                            {this.renderErrors()}
                            <div className="login-form">
                                <br />
                                <label className="email-label">
                                Email:
                                <br/>
                                <input type="text"
                                        value={this.state.email}
                                        onChange={this.update('email')}
                                        className="login-input"
                                    />
                                </label>
                                <br />
                                <label className="password-label">
                                Password:
                                <br/>
                                <input type="password"
                                        value={this.state.password}
                                        onChange={this.update('password')}
                                        className="login-input"
                                    />
                                </label>
                                <br />
                                <div className="demo-button">{this.handleDemo()}</div>
                                <input className="session-submit" type="submit" value={this.props.formType} />
                                <div className="login-header">
                                    {this.props.navLink}
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }  
}

export default SessionForm;