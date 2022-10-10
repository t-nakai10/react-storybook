# Storybook MEMO

## Storybook とは

- UI 開発用のツール
- コンポーネントを分離することで開発しやすくする
- 再利用のためにコンポーネントを文書化
- 自動的に視覚的にテスト
- アクセシビリティの検証を行うのに役立つ

## ストーリーとは

コンポーネントがレンダリングされた状態をキャプチャし、状態の説明をコンポーネント毎に作成するもの。

## インストール

`npx storybook init`

## bind 関数

### this の確認

- this は myButton であることがわかる

```js
const myButton = {
  content: "test",
  click() {
    console.log(this);
    console.log(this.content + "中です");
  },
};
```

- this はグローバルオブジェクト
- this.content は undefined となる

```js
const looseClick = myButton.click;
```

- **this は実行する方法によって変わる**

### bind を使用してどの this を使用するか決める

- myButton を引数に入れることで this の参照が myButton となる
- 他のオブジェクトでも可能

```js
const looseClick = myButton.click.bind(myButton);
```

### 参考にしたサイト

https://reffect.co.jp/html/javascript-bind

## 所感

- bind を使う部分がいまいち理解できてないが、Controls を使うのであれば必須.
- こだわりのないサイトであれば tailwind の名前 = 引数とできるため相性が良さそう.
- それ以外はサンプルで入ってくる ボタンコンポーネントのように BEM のような感じが使いやすそう.
