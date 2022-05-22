## React.js プロジェクト作成

### React.js

React.js プロジェクトを構築。

- create-react-app

  ```
  $ npx create-react-app . --template typescript
  ```

- プロダクションサーバー起動
  ```
  $ npm start
  ```

### VSCode

- VSCode 拡張機能

  - ES7+ React/Redux/React-Native snippets ｜ dsznajder
  - Prettier - Code formatter ｜ Prettier

- VSCode 設定

  - Editor: Format On Save

- package.json

  ```
  "prettier": {
    "trailingComma": "all",
    "tabWidth": 2,
    "semi": true,
    "singleQuote": true,
    "jsxSingleQuote": true,
    "printWidth": 80
  },
  ```

### ライブラリ追加

- プロダクションサーバー起動
  ```
  $ npm start
  ```

### GitHub

- initial commit
  ```
  $ git commit -m "initial commit"
  $ git remote add origin git@github.com:hfujiyos/typescript-frontend.git
  $ git push -u origin main
  ```

## ディレクトリ構成

## 参考文献

- [TypeScript の合併型と交差型ついて学ぼう](https://tyotto-good.com/blog/union-intersection-type)
- [interface と type の違い、そして何を使うべきかについて](https://zenn.dev/luvmini511/articles/6c6f69481c2d17)
