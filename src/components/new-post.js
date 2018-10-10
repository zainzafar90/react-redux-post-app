import React , {Component} from 'react';
import { Field, reduxForm } from 'redux-form';

class NewPost extends Component {
    
    renderTitleField(field) {
        return (
            <div>
                <input
                    type="text" 
                    className="form-control"
                    placeholder="Post title"
                    {...field.input}/>
            </div>
        );
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-6">

                <div className="card">
                    <div className="card-header header-elements-inline">
                    <h5 className="card-title">New Post</h5>
                    </div>

                    <div className="card-body">
                    <form>
                        <div className="form-group row">
                            <label className="col-lg-3 col-form-label">Title</label>
                            <div className="col-lg-9">
                                {/* <input type="text" className="form-control" placeholder="Post title"/> */}
                                <Field 
                                name="title" 
                                component={this.renderTitleField} />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-lg-3 col-form-label">Categories</label>
                            <div className="col-lg-9">
                                <select name="categories" className="form-control">
                                    <option value="opt1">News</option>
                                    <option value="opt2">Subscriptions</option>
                                    <option value="opt3">Updates</option>
                                    <option value="opt8">Article</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-lg-3 col-form-label">Textarea</label>
                            <div className="col-lg-9">
                                <textarea rows="5" cols="5" className="form-control" placeholder="Content"></textarea>
                            </div>
                        </div>

                        <div className="text-right">
                            <button type="submit" className="btn btn-primary">Submit form <i className="icon-paperplane ml-2"></i></button>
                        </div>
                    </form>
                    </div>
                </div>

            </div>
            </div>
        );
    }
}

export default reduxForm({
    form: 'NewPostForm'
})(NewPost);