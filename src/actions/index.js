import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const CREATE_POST = 'CREATE_POST';
export const DELETE_POST = 'DELETE_POST';

const API_URL = 'http://reduxblog.herokuapp.com/api';

const API_KEY = 'react-redux-posts-api-147';

export function fetchPosts() {
    const request = axios.get(`${API_URL}/posts?key=${API_KEY}`);
    return {
        type: FETCH_POSTS,
        payload: request
    }

}

export function fetchPost(id) {
    const request = axios.get(`${API_URL}/posts/${id}?key=${API_KEY}`);
    return {
        type: FETCH_POST,
        payload: request
    }
}

export function createPost(post, callback) {
    const request = axios.post(`${API_URL}/posts?key=${API_KEY}`, post)
                    .then(() => callback());
    return {
        type: CREATE_POST,
        payload: request
    }
}

export function deletePost(id, callback) {
    axios.delete(`${API_URL}/posts/${id}?key=${API_KEY}`)
    .then(() => callback());
    return {
        type: DELETE_POST,
        payload: id
    }
}