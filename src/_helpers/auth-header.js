export function authHeader() {
    // return authorization header with jwt token
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.data.token) {
        return {
            'Access-Control-Allow-Origin': '*',
            "Accept": "application/json",
            "Content-Type": "application/json",
            'Authorization': 'Bearer ' + user.data.token };
    } else {
        return {};
    }
}