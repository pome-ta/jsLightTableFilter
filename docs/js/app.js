'use strict';


document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded');
});

const dataGrid_path = new URL('./data/gridDummy.json', location.protocol + '//' + location.host + location.pathname).href;

async function res_json(uri) {
  const data_array = new Array();
  const res = await fetch(uri);
  const json_data = await res.json();
  return JSON.parse(json_data);
  //return json_data;
  /*
  for (let data of json_data) {
    data_array.push(Object.values(data));
  }
  return data_array;
  */
  
  
}

let jjj = await res_json(dataGrid_path);

for (let d of jjj) {
  console.log(d);
}

