import http from 'k6/http';
import {sleep} from 'k6';

export default function () {
    http.get('https://shop.deere.com');
    sleep(1);
}