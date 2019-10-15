import config from 'config';
import {authHeader, router} from '../_helpers';

export const postService = {
    getAllPosts,
    createTickets,
    getTicketById

};

function getAllPosts() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/tickets`, requestOptions).then(handleResponse);
}
function createTickets(ticket) {
    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify(ticket)

    };
    return fetch(`${config.apiUrl}/tickets`, requestOptions).then(handleResponse);
}

function getTicketById(id) {
    // var  id = router.currentRoute.params.id;
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/tickets/${id}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            var errors = {}  ;
            if (response.status === 422) {
                errors = (data && data.errors) || response.statusText;
                errors.msg=data.message;
            }
            return Promise.reject( errors );
        }
        return data;
    });
}