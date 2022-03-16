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
    let x = 1;
  });
