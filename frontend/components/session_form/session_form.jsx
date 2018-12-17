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
        if (this.props.formType === "Login"){
            return(
                <input className="demo-submit"
                    onClick={() => {
                        this.setState ({
                            email: "demo@gmail.com", 
                            password: "demo123"})
                            this.handleSubmit()
                        }
                    }
                    type="submit"
                    value="Demo Login"
                    />
            )
        }
    }
        // e.preventDefault();
        // this.setState({ email: "demo@gmail.com", password: "demo123" });
        // const user = Object.assign({}, this.state);
        // this.props.processForm(user).then(() => this.props.history.push("/users"));

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
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <div className="overall-form">
                        <br />
                        <div className="login-header">
                            Please {this.props.formType} or {this.props.navLink}
                        </div>
                        {this.renderErrors()}
                        <div className="login-form">
                            <br />
                            <label className="email-label">Email:
                            <input type="text"
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                    className="login-input"
                                />
                            </label>
                            <br />
                            <label className="password-label">Password:
                            <input type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    className="login-input"
                                />
                            </label>
                            <br />
                            <div className="demo-button">{this.handleDemo()}</div>
                            <input className="session-submit" type="submit" value={this.props.formType} />
                        </div>
                    </div>
                </form>
            </div>
        );
    }  
}

export default SessionForm;