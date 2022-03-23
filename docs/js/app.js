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



function createElementAddClass(tag, name) {
  const element_obj = document.createElement(tag);
  element_obj.classList.add(name);
  return element_obj;
}




function createGridElement(grid_json) {
  // xxx: 可変長引数
  const container = createElementAddClass('section', 'container');
  
  
  grid_json.forEach(data => {
    const wrapper = createElementAddClass('div', 'wrapper');
    for(const key of Object.keys(data)) {
      const gridItem = createElementAddClass('div', 'griditem');
      gridItem.classList.add(key);
      
      // xxx: switch やだなー
      let content = null;
      switch (key) {
        case 'favicon':
          content = `<img src="${data[key]}">`;
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
      
      //gridItem.textContent = `${data[key]}`;
      gridItem.innerHTML = content;
      wrapper.appendChild(gridItem);
      
    }
    //console.log(data);
    container.appendChild(wrapper)
    
  });
  
  
  document.body.appendChild(container);
}

createGridElement(json_obj);
