'use strict';


document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded');
});

const my_location = `${location.protocol}//${location.host}${location.pathname}`;
const dataGrid_path = new URL('./data/gridDummy.json', my_location).href;


const faviconUrl = (url) => `https://www.google.com/s2/favicons?domain=${new URL(url).hostname}`;

async function res_json(uri) {
  const res = await fetch(uri);
  const json_data = await res.json();
  const json_array = [...json_data].map(data => Object.assign({'favicon': faviconUrl(data.url)}, data));
  return json_array;
}




let primitive_json = await res_json(dataGrid_path);
console.log(primitive_json);

