import http from 'k6/http';
import {sleep} from 'k6';

export const options = {
    executor: 'shared-iterations', // The iterations are shared between the number of VUs.
                                   // Iterations are not guaranteed to be evenly distributed with this executor.
                                   // VU that executes faster will complete more iterations than slower VUs.


    vus: 10,
    iterations: 200,
    maxDuration: '30s'
}

export default function () {
    http.get('https://www.amazon.in');
    sleep(1);
}