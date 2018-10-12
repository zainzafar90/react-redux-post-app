import React , {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions/index';

class NewPost extends Component {
    
    renderField(field) {
        const classNames= `form-control ${(field.meta.touched && field.meta.error) ? 'is-invalid' : ''}`;
        return (
            <div className="form-group row">
                <label className="col-lg-3 col-form-label">{field.label}</label>
                <div className="col-lg-9">
                    <input
                        type="text" 
                        className={classNames}
                        placeholder="Post title"
                        {...field.input}/>

                    {field.meta.touched && (<label className="validation-invalid-label">{field.meta.error}</label>)} 
                </div>
            </div>
        );
    }

    renderSelect({input, label, meta: { touched, error, warning }}) {
        const classNames= `form-control ${(touched && error) ? 'is-invalid' : ''}`;

        return (
            <div className="form-group row">
                <label className="col-lg-3 col-form-label">{label}</label>
                <div className="col-lg-9">
                    <select  className={classNames} {...input}>
                        <option></option>
                        <option value="news">News</option>
                        <option value="subscriptions">Subscriptions</option>
                        <option value="updates">Updates</option>
                        <option value="article">Article</option>
                    </select>

                    {touched && (<label className="validation-invalid-label">{error}</label>)} 
 
                </div>
            </div>
        );
    }

    renderTextArea({input, label, meta: { touched, error, warning }}) {
        const classNames= `form-control ${(touched && error) ? 'is-invalid' : ''}`;

        return (
            <div className="form-group row">
                <label className="col-lg-3 col-form-label">{label}</label>
                <div className="col-lg-9">
                    <textarea  
                        cols="5" 
                        rows="5"  
                        className={classNames}
                        placeholder="Type your content here.."  {...input}></textarea>
                        {touched && (<label className="validation-invalid-label">{error}</label>)} 
                </div>
            </div>
        );
    }

    onSubmit(values) {
        this.props.createPost(values, () => {
            this.props.history.push('/');
        });
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <div className="row">
                <div className="col-md-6">

                <div className="card">
                    <div className="card-header header-elements-inline">
                    <h5 className="card-title">New Post</h5>
                    </div>

                    <div className="card-body">
                    <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                       
                        <Field 
                            label="Title"
                            name="title" 
                            component={this.renderField} />

                        <Field 
                            label="Categories"
                            name="categories" 
                            component={this.renderSelect} />
                        
                        <Field 
                            label="Content"
                            name="content" 
                            component={this.renderTextArea} />

                        <div className="text-right">
                            <button type="submit" className="btn btn-primary">Submit form <i className="icon-paperplane ml-2"></i></button>
                            <Link className="btn btn-danger ml-2 text-white" to="/">
                                Cancel
                            </Link>
                        </div>
                    </form>
                    </div>
                </div>

            </div>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};

    if (!values.title) {
        errors.title = 'Enter title';
    }

    if (!values.categories) {
        errors.categories = 'Enter categories';
    }

    if (!values.content) {
        errors.content = 'Enter content';
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'NewPostForm'
})(
    connect(null, { createPost })(NewPost)
);