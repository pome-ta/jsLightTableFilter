# ð 2022/06/25

ã­ã¸ãã¯ã©ãã«ããããã­

# ð 2022/03/23

foræã¨ã`Areay.map()` ããã®ä½¿ãåã


# ð 2022/03/22

json ã®ãªãã¸ã§ã¯ããã³ãã³ããããã©ãè¨­è¨ããã§ããã®ããªï¼ã¡ã¢ãªã¨ããçé£ããã¦ãï¼

``` new.js
async function res_json(uri) {
  const res = await fetch(uri);
  const json_data = await res.json();
  const json_array = [...json_data].map(data => Object.assign({'favicon': faviconUrl(data.url)}, data));
  return json_array;
}
```


``` old.js
async function res_json(uri) {
  const res = await fetch(uri);
  const json_data = await res.json();
  for (let data of json_data) {
    data.favicon = faviconUrl(data.url);
  }
  return json_data;
}
```


ã¾ããforæã®ã¤ã³ãã³ããããã£ããï¼


# ð 2022/03/21

`old` ã¨ãä½ãã®ã²ã©ããã©ãç¢ºèªç¨ã¨ãã¦è¨­ç½®

classåããããã¦ã¿ã




# ð 2022/03/16

## å¤æ´æ³å®

- äºåæºåããã¦ãããã¼ãã«ãå¯å¤ã§ããããã«
    - ãã¼ãã«ä»¥å¤ã§ãå¯¾å¿ã§ããããã«
- `Array`
    - `Array.prototype` ã¨ãå¼ã¶ãã¨ãããã
    - `forEach.call` å¤çºãåé¿
- è¡¨ç¤ºããã¦ããã®ãã¢ãã³ã«


## é çª

1. ãã¼ãã«å¯å¤
    - fetch ã§æã£ã¦ãã
    - ãã¼ã¿ãã©ãã§ãã¼ãã«ã¨ããã
1. `Array` é¢ä¿
1. è¡¨ç¤º
1. ãã¼ãã«ä»¥å¤



# ð 2022/03/15

## åºã®è¨­è¨


1. ããããã(`.html` ä¸ã§)å®æãã¦ããã¼ãã«
1. DOM ãå®æã`readyState` ãã`complete`
    - `LightTableFilter` ã§ã`init` ãè¿ãã¦å®è¡
    - ç©ºã®`Array`
      - htmlã¯ã©ã¹ã®`light-table-filter` ãåå¾
      - `light-table-filter` ã®`input` ã«`_onInputEvent` ãä¹ãã
1. `input` ã¤ãã³ããèµ°ã
    - å¥åæå ±ããããã¼ãã«åãæ¤ç´¢
    - æ¤ç´¢ã«ããããªããã®ã`none` ã§éè¡¨ç¤º



[readystatechange](https://developer.mozilla.org/ja/docs/Web/API/Document/readystatechange_event)

[Load DOMContentLoaded ReadyStateChange ã®å¼ã³åºãé ã¨window, documentãªãã¸ã§ã¯ãããã®å¼ã³åºã (JavaScript ãã­ã°ã©ãã³ã°)](https://www.ipentec.com/document/javascript-call-order-load-and-dom-content-loaded-and-ready-state-change)
