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
