function _search(name) {
    if (Math.random() < 0.25) {
        return Promise.reject('Something went wrong');
    }

    // return fetch(`https://swapi.co/api/people/?search=${name}`).then(res => {
    //     if (!res.ok) {
    //         return Promise.reject(res.statusText);
    //     }
    //     return res.json();
    // }).then(data => data.results.map(character => character.name));
    return Promise.resolve(['Luke Skywalker', 'Han Solo', 'r2d2']);
}

export function search(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(_search(name)), 500);
    });
}
