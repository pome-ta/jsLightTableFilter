'use strict';


document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded');
});


const get_path = (path) => {
  const _location = `${location.protocol}//${location.host}${location.pathname}`;
  return new URL(path, _location).href;
}

const faviconUrl = (url) => `https://www.google.com/s2/favicons?domain=${new URL(url).hostname}`;

async function res_json(uri) {
  const res = await fetch(uri);
  const json_data = await res.json();
  // xxx: 無駄が多いかしら？
  return [...json_data].map(data => Object.assign({'favicon': faviconUrl(data.url)}, data));
}

const json_path = './data/gridDummy.json';
const dataGrid_path = get_path(json_path);

let primitive_json = await res_json(dataGrid_path);
console.log(primitive_json);

