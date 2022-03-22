'use strict';


document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded');
});

//const dataGrid_path = new URL('./data/gridDummy.json', location.protocol + '//' + location.host + location.pathname).href;
// todo: あまりかわらんか
const dataGrid_path = new URL('./data/gridDummy.json', `${location.protocol}//${location.host}${location.pathname}`).href;
const faviconUrl = (url) => `https://www.google.com/s2/favicons?domain=${new URL(url).hostname}`;

async function res_json(uri) {
  const data_array = new Array();
  const res = await fetch(uri);
  const json_data = await res.json();
  //return json_data;
  //const json_array = [...json_data].map(data => {{'favicon': faviconUrl(data.url)}, ...data});
  
  const json_array = [...json_data].map((data, index, array) => console.log(data, index, array));
  
  console.log(json_array);
  for (let data of json_data) {
    //console.log(data.url);
    let favicon = {'favicon': faviconUrl(data.url)};
    //data_array.push({favicon, ...data})
    //console.log({favicon, ...data});
    data.favicon = favicon;
  }
  //console.log(data_array);
  //console.log(json_data);
}




let primitive_json = await res_json(dataGrid_path);

