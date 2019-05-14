import { urlCng } from './urlConfig';

export function postTestConfig(params) {
    return fetch(urlCng.cases.create, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(params),
    }).then(res => res.json())
}

export function getTestConfig(params) {
    return fetch(urlCng.cases.scene + params + '/', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
        mode: 'cors',
    }).then(res => res.json())
}


export function getSceneList(params) {
    return fetch(urlCng.cases.scene, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
        mode: 'cors',
        data: JSON.stringify(params),
    }).then(res => res.json())
}

