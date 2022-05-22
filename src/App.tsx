import React from 'react';
import logo from './logo.svg';
import './App.css';

// const:再代入できない
const name = 'hello'; //ﾘﾃﾗﾙ文字列

// let:再代入できる変数
let nameChange = 'hello';
nameChange = 'hello2';

// annotation:明示的型指定
let userName: string = 'Hello';
let dummyNum: number = 2;
let bool: boolean = true;

// 配列型定義
let array1 = [true, false, true];
let array2 = [0, 1, 'hello'];

// ｵﾌﾞｼﾞｪｸﾄ型定義
interface NAME {
  first: string; //必須
  middle?: string; //任意
  last: string | null; //NULL可
}
let nameObj: NAME = { first: 'Yamada', last: null };

// 関数型定義
const func1 = (x: number, y: number): number => {
  return x + y;
};

function App() {
  return (
    <div className='App'>
      <header className='App-header'></header>
    </div>
  );
}

export default App;
