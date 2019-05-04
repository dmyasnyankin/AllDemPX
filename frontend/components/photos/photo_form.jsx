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
    
    renderErrors() {
        if (this.props.errors) {
        return (
                // <ul>
                //     {this.props.errors.map((error, i) => (
                //         <li key={`error-${i}`}>
                //             {error}
                //         </li>
                //     ))}
                // </ul>
                <div className="upload-errors">
                    {this.props.errors.error}
                </div>
            );
        }
    }

    render() {
        return (
            <div className="main-pages">
                <div className="photo-index-bottom-wrp">
                    <div className="photo-index-bottom-page">
                        <hr/>
                        <p className="photo-index-upload-title">Upload Your Photos!</p>
                        <p className="photo-index-upload-description">Share your work with the world</p>
                        {this.renderErrors()}
                        <form className="photo-form" onSubmit={this.handleSubmit}>
                            <input className="photo-title" type="text" placeholder="Give your work a title!" value={this.state.title} onChange={this.update("title")} />
                            <div className="photo-title-wrp">
                                <input className="photo-file" id="file" type="file" onChange={this.handleFile.bind(this)}/>
                                <label className="photo-file-edit" htmlFor="file">Select Photos!</label>
                            </div>
                            <input className="photo-submit-button" onClick={window.location.reload}type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default PhotoForm;
