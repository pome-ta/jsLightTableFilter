# 📝 2022/03/22

json のオブジェクトをコネコネしたけど、設計これでいいのかな？メモリとか、爆食いしてる？

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


まぁ、for文のインデントよりすっきり？


# 📝 2022/03/21

`old` とか作るのひどいけど、確認用として設置

class化したりしてみる




# 📝 2022/03/16

## 変更想定

- 事前準備されているテーブルを可変できるように
    - テーブル以外でも対応できるように
- `Array`
    - `Array.prototype` と、呼ぶことやめたい
    - `forEach.call` 多発を回避
- 表示されてるものをモダンに


## 順番

1. テーブル可変
    - fetch で持ってくる
    - データをどこでテーブルとするか
1. `Array` 関係
1. 表示
1. テーブル以外



# 📝 2022/03/15

## 基の設計


1. あらかじめ(`.html` 上で)完成してるテーブル
1. DOM が完成し`readyState` が、`complete`
    - `LightTableFilter` で、`init` を返して実行
    - 空の`Array`
      - htmlクラスの`light-table-filter` を取得
      - `light-table-filter` の`input` に`_onInputEvent` を乗せる
1. `input` イベントが走る
    - 入力情報から、テーブル内を検索
    - 検索にかからないものを`none` で非表示



[readystatechange](https://developer.mozilla.org/ja/docs/Web/API/Document/readystatechange_event)

[Load DOMContentLoaded ReadyStateChange の呼び出し順とwindow, documentオブジェクトからの呼び出し (JavaScript プログラミング)](https://www.ipentec.com/document/javascript-call-order-load-and-dom-content-loaded-and-ready-state-change)
