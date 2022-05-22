import React from 'react';
import logo from './logo.svg';
import './App.css';

// 定数定義（再代入不可）
const name = 'hello';

// 変数定義（再代入可）
let nameChange = 'hello';
nameChange = 'hello2';

// 明示的型指定（Type Annotation）
let userName: string = 'Hello';
let dummyNum: number = 2;
let bool: boolean = true;

// 配列型定義
let array1 = [true, false, true];
let array2 = [0, 1, 'hello'];

// ｵﾌﾞｼﾞｪｸﾄ型定義（宣言）
interface NAME {
  first: string; //必須
  middle?: string; //任意
  last: string | null; //NULL可
}
let nameObj: NAME = { first: 'Yamada', last: null };

// ｵﾌﾞｼﾞｪｸﾄ型ｴｲﾘｱｽ式（代入実行）
type FULLNAME = {
  first: string; //必須
  middle?: string; //任意
  last: string | null; //NULL可
};
let fullnameObj: FULLNAME = { first: 'Yamada', last: null };

// 関数定義（宣言）
function func1(x: number, y: number): number {
  return x + y;
}

// 関数式（代入実行）
const func2 = (x: number, y: number): number => {
  return x + y;
};

// 交差型定義（Intersection Types）
// 両者を兼ねる場合は＆で交差型定義
type PROFILE = {
  age: number;
  city: string;
}; //型ｴｲﾘｱｽ式
type LOGIN = {
  username: string;
  password: string;
}; //型ｴｲﾘｱｽ式
type USER = PROFILE & LOGIN; //交差型定義
const userA: USER = {
  age: 30,
  city: 'Tokyo',
  username: 'xxx',
  password: 'yyy',
}; //定数ｴｲﾘｱｽ式

// 合併型定義（Union Types）
// 両者いずれかの場合は｜で合併型定義
let value: boolean | number;
value = true;
value = 10;

let arrayUni: (number | string)[];
arrayUni = [0, 1, 2, 'hello'];

let company: 'Google' | 'Apple' | 'Facebook' | 'Amazon';
company = 'Amazon';

let memory: 256 | 512;
memory = 256;

// 型継承（typeof）※JSONのconst定義の属性定義に利用
let msg: string = 'Hi'; //明示的型定義:string
let msg2: typeof msg; //型継承:string
msg2 = 'hello';

let animal = { cat: 'small cat' }; //型推論定義:string
let newAnimal: typeof animal = { cat: 'big cat' }; //型継承:string

// 型継承合併型（keyof）
type KEYS = {
  primary: string;
  secondary: string;
}; //型ｴｲﾘｱｽ式
let key: keyof KEYS; //型継承合併型:primary | secondary
key = 'primary';

// 定数継承合併型（typeof + keyof）
const SPORTS = {
  soccer: 'Soccer',
  baseball: 'Baseball',
}; //定数ｴｲﾘｱｽ式
let keySports: keyof typeof SPORTS; //定数継承合併型:soccer | baseball
keySports = 'soccer';

function App() {
  return (
    <div className='App'>
      <header className='App-header'></header>
    </div>
  );
}

export default App;
