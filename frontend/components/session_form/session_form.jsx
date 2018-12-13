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
        e.preventDefault;
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
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
}