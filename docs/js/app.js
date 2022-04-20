'use strict';

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded');
});

const get_path = (path) => {
  const _location = `${location.protocol}//${location.host}${location.pathname}`;
  return new URL(path, _location).href;
};

const faviconUrl = (url) =>
  `https://www.google.com/s2/favicons?domain=${urlParse(url)}`;

// https://ja.javascript.info/url
function urlParse(urlstr) {
  const urlBase = new URL(urlstr);
  const origin = urlBase.origin;
  const [, s, ..._] = urlBase.pathname.split('/');
  const url = [origin, s].join('/');
  return url;
}

async function res_json(uri) {
  const res = await fetch(uri);
  const json_data = await res.json();
  return json_data;
}

const json_path = './data/gridDummy.json';
const dataGrid_path = get_path(json_path);

const json_data = await res_json(dataGrid_path);
// xxx: メモリ無駄が多いかしら？
//const json_obj = [...json_data].map(data => Object.assign({'favicon': faviconUrl(data.url)}, data));
// xxx: ギガ死なない対策
const json_obj = [...json_data].map((data) =>
  Object.assign({ favicon: faviconUrl(data.url) }, data)
);

function createElementAddClass(tag, ...names) {
  const element_obj = document.createElement(tag);
  for (const name of names) {
    element_obj.classList.add(name);
  }
  return element_obj;
}

// xxx: class化 ？
function createGridElement(grid_json) {
  const inputs = createElementAddClass('input', 'Light-table-filter');
  inputs.setAttribute('type', 'search');
  inputs.setAttribute('data-table', 'order-table');
  inputs.setAttribute('placeholder', '検索');

  const gridWrap = createElementAddClass('div', 'gridWrap');

  const container = createElementAddClass('section', 'container');
  grid_json.forEach((data) => {
    const wrapper = createElementAddClass('div', 'wrapper');
    for (const key of Object.keys(data)) {
      const gridItem = createElementAddClass('div', 'griditem', key);

      // xxx: switch やだなー
      let content = null;
      switch (key) {
        case 'favicon':
          //content = `<img src="${data[key]}">`;
          content = `${data[key]}`;
          break;
        case 'title':
          content = `<a href="${data.url}">${data[key]}</a>`;
          break;
        case 'url':
          content = `${data[key]}`;
          break;
        default:
          content = null;
      }
      gridItem.innerHTML = content;
      wrapper.appendChild(gridItem);
    }
    gridWrap.appendChild(wrapper);
  });

  container.appendChild(inputs);
  container.appendChild(gridWrap);
  document.body.appendChild(container);
  console.log('hoge');
}

createGridElement(json_obj);
