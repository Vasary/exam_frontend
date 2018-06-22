import * as data from '../../package.json';

export const environment = {
    production: true,

    core: 'http://localhost:81',

    version: data.version,
    name: data.name,
    author: data.name
};
