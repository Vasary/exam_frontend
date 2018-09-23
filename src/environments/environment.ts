import * as data from '../../package.json';

export const environment = {
    production: true,

    core: 'http://core.dent.plus',

    version: data.version,
    name: data.name,
    author: data.name
};
