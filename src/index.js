import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import reducers from './reducers';
import PostIndex from './components/post-index';
import NewPost from './components/new-post';
import PostDetail from './components/post-detail';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <div>
          <div className="page-header page-header-dark">
            <div className="page-header-content header-elements-md-inline">
              <div className="page-title d-flex">
                <h4>Posts App</h4>
              </div>
            </div>
          </div>
          <div className="page-content">

            <div className="content-wrapper">

              <div className="content">
                <div className="card">
                  <div className="card-body">
                  <BrowserRouter>
                    <Switch>
                      <Route path="/posts/new" component={NewPost} />
                      <Route path="/posts/:id" component={PostDetail} />
                      <Route path="/" component={PostIndex} />
                    </Switch>
                  </BrowserRouter>
                  </div>
                </div>
              </div>

            </div>

          </div>
      </div>
   
  </Provider>
  , document.querySelector('#root'));
