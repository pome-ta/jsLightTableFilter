'use strict';

//console.log('top');

let LightTableFilter = (function (Arr) {
  console.log(Arr);

  let _input;

  function _onInputEvent(e) {
    _input = e.target;
    let tables = document.getElementsByClassName(_input.getAttribute('data-table'));
    Arr.forEach.call(tables, function (table) {
      Arr.forEach.call(table.tBodies, function (tbody) {
        Arr.forEach.call(tbody.rows, _filter);
      });
    });
  }

  function _filter(row) {
    let text = row.textContent.toLowerCase(), val = _input.value.toLowerCase();
    row.style.display = text.indexOf(val) === -1 ? 'none' : 'table-row';
  }

  return {
    init: function () {
      let inputs = document.getElementsByClassName('light-table-filter');
      Arr.forEach.call(inputs, function (input) {
        input.oninput = _onInputEvent;
      });
    }
  };
})(Array.prototype);

document.addEventListener('readystatechange', function () {
  //console.log('readystatechange');
  if (document.readyState === 'complete') {
    //console.log('complete');
    LightTableFilter.init();
  }
});

document.addEventListener('DOMContentLoaded', main);
function main() {
  console.log('DOMContentLoaded');
}


const data_path = new URL('./data/dummy.json', location.protocol + '//' + location.host + location.pathname).href;

fetch(data_path)
  .then(res => res.json())
  .then(json_data => {
    //console.log(json_data);
    jsonDump(json_data)
  });


function jsonDump(raw_json) {
  //console.log(raw_json);
  const ele = document.createElement('div');
  
  const header = Object.keys(raw_json[0]);//.keys();
  const json_array = new Array();
  json_array.push(header)
  // xxx: `for` で回さんでもいけるやろ 😡
  for (let person_data of raw_json) {
    //console.log(person_data);
    json_array.push(Object.values(person_data));
    ele.innerHTML += person_data;
  }
  document.body.appendChild(ele);
  console.log(json_array);
}

function convertTable(arr) {
  for (let row of arr) {
    console.log(row);
  }
}

