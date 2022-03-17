'use strict';


let LightTableFilter = ((Arr) =>  {
  let _input;
  function _onInputEvent(e) {
    _input = e.target;
    let tables = document.getElementsByClassName(_input.getAttribute('data-table'));
    Arr.forEach.call(tables, (table) =>  {
      Arr.forEach.call(table.tBodies, (tbody) => {
        Arr.forEach.call(tbody.rows, _filter);
      });
    });
  }

  function _filter(row) {
    let text = row.textContent.toLowerCase();
    let val = _input.value.toLowerCase();
    row.style.display = text.indexOf(val) === -1 ? 'none' : 'table-row';
  }

  return {
    init: () => {
      let inputs = document.getElementsByClassName('light-table-filter');
      Arr.forEach.call(inputs, (input) => {
        input.oninput = _onInputEvent;
      });
    }
  };
//})(Array.prototype);
})(new Array());  // xxx: これ大丈夫？

document.addEventListener('readystatechange', () => {
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
    //console.log('fetc');
    let inner = convertTable(jsonDump(json_data));
    setTabel(inner);
    
  });

function setTabel(inner) {
  const ele = document.createElement('div');
  ele.classList.add('container');
  ele.innerHTML = inner;
  document.body.appendChild(ele);
}

function jsonDump(raw_json) {
  const header = Object.keys(raw_json[0]);
  const json_array = new Array();
  json_array.push(header)
  // xxx: `for` で回さんでもいけるやろ 😡
  for (let person_data of raw_json) {
    json_array.push(Object.values(person_data));
  }
  return json_array;
}

// xxx: 二度手間ですけど？
function convertTable(arr) {
  let inner = '<table class="order-table">';
  const header = [...arr].shift();
  inner += get_theadTable(header);
  const body = arr.slice(1);
  inner += get_tbodyTable(body);
  inner += '</table>';
  return inner;
}

function get_theadTable(header) {
  let inner = '<thead><tr>';
  for (let th of header) {
    inner += `<th>${th}</th>`;
  }
  inner += '</tr></thead>';
  return inner;
}

function get_tbodyTable(body) {
  let inner = '<tbody>';
  for (let block of body) {
    inner += '<tr>';
    for (let data of block) {
      inner += `<td>${data}</td>`;
    }
    inner += '</tr>';
  }
  inner += '</tbody>';
  return inner;
}


