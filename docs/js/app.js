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
  return json_data;
}



const json_path = './data/gridDummy.json';
const dataGrid_path = get_path(json_path);

const json_data = await res_json(dataGrid_path);
// xxx: 無駄が多いかしら？
const json_obj = [...json_data].map(data => Object.assign({'favicon': faviconUrl(data.url)}, data));

//console.log(json_obj);

function createGridElement(grid_json) {
  const container = document.createElement('section');
  container.classList.add('container');
  for (let data of grid_json) {
    //console.log('hoge');
    //console.log(data);
    let wrap = document.createElement('div');
    wrap.classList.add('wrap');
    wrap.innerHTML = Object.values(data);
    container.appendChild(wrap);
  }
  
  document.body.appendChild(container);
  
}

createGridElement(json_obj);
