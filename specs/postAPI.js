import http from 'k6/http';
import {sleep} from 'k6';
import {check} from 'k6';

export const options = {
    vus: 1,
    duration: '5s'
}

export default function () {
    const url = "https://dummyjson.com/auth/login";
    const payload = JSON.stringify({
        username: 'kminchelle',
        password: '0lelplR'
    });
    const params = {
        headers: {
            'Content-Type': 'application/json',
        }
    };

    sleep(1);
    const response = http.post(url, payload, params);
    // http.postMessage(url, payload, params);

    check(response, {
        'Status code 200': (r) => r.status === 200,
        'Response body has username': (r) => r.body.includes('kminchelle')
    });

}