import http from 'k6/http';
import {sleep} from 'k6';

export const options = {
    executor: 'per-vu-iterations', // Each VU executes an exact number of iterations. The total number of completed iterations will be [vus * iterations]
                                   // Iterations are guaranteed to be evenly distributed with this executor.
                                   // This can be useful when you have fixed sets of test data that you want to partition between VUs.


    vus: 1000,
    iterations: 20000,
    maxDuration: '30s'
}

export default function () {
    http.get('https://www.amazon.in');
    sleep(1);
}