import React from 'react';

class PhotoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = Object.assign({}, this.props.photo, {photoFile: null})

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append("photo[title]", this.state.title)
        formData.append("photo[photo]", this.state.photoFile)
        this.props.action(formData)
    }

    handleFile(e){
        this.setState({photoFile: e.currentTarget.files[0]});
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input className="photo-title" type="text" value={this.state.title} onChange={this.update("title")} />
                    <input type="file" onChange={this.handleFile.bind(this)}/>
                    <input className="photo-submit-button" type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default PhotoForm;
