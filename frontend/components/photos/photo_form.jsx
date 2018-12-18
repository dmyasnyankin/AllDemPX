import React from 'react';

class PhotoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.photo;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input className="photo-title" type="text" value={this.state.title} onChange={this.update("title")} />
                    <input className="photo-image" type="text" value={this.state.image_url} onChange={this.update("image_url")}/>
                    <input className="photo-submit-button" type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default PhotoForm;
