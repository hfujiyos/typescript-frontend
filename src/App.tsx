import React from 'react';
import logo from './logo.svg';
import './App.css';

/**
 * 型定義
 */

// 定数定義（再代入不可）
const name = 'hello';

// 変数定義（再代入可）
let nameChange = 'hello';
nameChange = 'hello2';

// 型注釈定義（Type Annotation）
let userName: string = 'Hello';
let dummyNum: number = 2;
let bool: boolean = true;

// 配列型定義
let array1 = [true, false, true];
let array2 = [0, 1, 'hello'];

/**
 * ｵﾌﾞｼﾞｪｸﾄ型定義
 */

// ｵﾌﾞｼﾞｪｸﾄ型定義（宣言定義の従来手法）
interface NAME {
  first: string; //必須
  middle?: string; //任意
  last: string | null; //NULL可
}
let nameObj: NAME = { first: 'Yamada', last: null };

// ｵﾌﾞｼﾞｪｸﾄ型ｴｲﾘｱｽ式（代入実行の現在手法）
type FULLNAME = {
  first: string; //必須
  middle?: string; //任意
  last: string | null; //NULL可
};
let fullnameObj: FULLNAME = { first: 'Yamada', last: null };

/**
 * 関数定義
 */

// 関数定義（宣言定義の従来手法）
function func1(x: number, y: number): number {
  return x + y;
}

// 関数式（代入実行の現在手法）
const func2 = (x: number, y: number): number => {
  return x + y;
};

/**
 * 型拡張
 */

// 交差型拡張（Intersection Types）
// 両者を兼ねる場合は＆で交差型拡張
type PROFILE = {
  age: number;
  city: string;
}; //型ｴｲﾘｱｽ式
type LOGIN = {
  username: string;
  password: string;
}; //型ｴｲﾘｱｽ式
type USER = PROFILE & LOGIN; //交差型拡張
const userA: USER = {
  age: 30,
  city: 'Tokyo',
  username: 'xxx',
  password: 'yyy',
}; //定数ｴｲﾘｱｽ式

// 合併型拡張（Union Types）
// 両者いずれかの場合は｜で合併型拡張
let value: boolean | number;
value = true;
value = 10;

let arrayUni: (number | string)[];
arrayUni = [0, 1, 2, 'hello'];

let company: 'Google' | 'Apple' | 'Facebook' | 'Amazon';
company = 'Amazon';

let memory: 256 | 512;
memory = 256;

/**
 * 継承
 */

// 型継承（typeof）
// JSONのconst関数式の属性定義に利用
let msg: string = 'Hi'; //型注釈定義：string
let msg2: typeof msg; //型継承：string
msg2 = 'hello';

let animal = { cat: 'small cat' }; //型推論定義：string
let newAnimal: typeof animal = { cat: 'big cat' }; //型継承：string

// 合併型継承（keyof）
type KEYS = {
  primary: string;
  secondary: string;
}; //型ｴｲﾘｱｽ式
let key: keyof KEYS; //合併型継承：primary｜secondary
key = 'primary';

// 値継承（typeof + keyof）
const SPORTS = {
  soccer: 'Soccer',
  baseball: 'Baseball',
}; //定数ｴｲﾘｱｽ式
let keySports: keyof typeof SPORTS; //値継承：soccer｜baseball
keySports = 'soccer';

/**
 * 列挙型（enum）
 * @description TypeScriptの列挙型（enum）は非推奨
 * @description TypeScriptのUnion型（type / typeof / keyof）が推奨
 */

// 列挙型（enum）
// 自動で連番定数定義
enum OS {
  Windows, //0
  Mac, //1
  Linux, //2
}
interface PC {
  id: number;
  OStype: OS;
}
const PC1: PC = {
  id: 1,
  OStype: OS.Windows,
};
const PC2: PC = {
  id: 2,
  OStype: OS.Mac,
};

/**
 * 互換性
 */

// 型の互換性
const comp1 = 'test'; //型推論定義：test型
let comp2: string = comp1; //test型よりもstring型が高抽象度のため代入可

// 関数の互換性
let funcComp1 = (x: number) => {};
let funcComp2 = (x: number) => {};
funcComp1 = funcComp2; //引数同型のため関数を代入可

/**
 * ｼﾞｪﾈﾘｸｽ（Generics）
 * @description 抽象的にｴｲﾘｱｽ定義し、動的に型引数を定義
 */

// ｼﾞｪﾈﾘｸｽ型引数（ﾃﾞﾌｫﾙﾄ無）
interface GEN<T> {
  item: T;
}
const gen0: GEN<string> = { item: 'hello' };
const gen1: GEN<number> = { item: 12 };

// ｼﾞｪﾈﾘｸｽ型引数（ﾃﾞﾌｫﾙﾄ有）
interface GEN1<T = string> {
  item: T;
}
const gen3: GEN1 = { item: 'hello' };

// ｼﾞｪﾈﾘｸｽ型引数（extends制約｜合併型）
interface GEN2<T extends string | number> {
  item: T;
}
const gen4: GEN2<number> = { item: 12 };

// ｼﾞｪﾈﾘｸｽ関数
function funcGen<T>(props: T) {
  return { item: props };
}
const gen6 = funcGen<string>('test');
const gen7 = funcGen<string | null>(null);

// ｼﾞｪﾈﾘｸｽ関数（extends制約｜合併型）
function funcGen1<T extends string | null>(props: T) {
  return { value: props };
}
const gen8 = funcGen1('hello');
const gen9 = funcGen1(null);

/**
 * ﾌﾟﾛｯﾌﾟｽ（Props）
 * @description ｺﾝﾎﾟｰﾈﾝﾄ間の値渡し
 */

// Propsﾌｧﾝｸｼｮﾝ構文（extends制約）
interface Props {
  price: number;
}
function funcGen3<T extends Props>(props: T) {
  return { value: props.price };
}
const gen10 = funcGen3({ price: 10 });

// Propsｱﾛｰ関数構文（extends制約）
type PropsAllow = {
  price: number;
};
const funcGen4 = <T extends PropsAllow>(props: T) => {
  return { value: props.price };
};

/**
 * Appｺﾝﾎﾟｰﾈﾝﾄ
 * @description index.tsxに配置されるｺﾝﾎﾟｰﾈﾝﾄ
 */
function App() {
  return (
    <div className='App'>
      <header className='App-header'></header>
    </div>
  );
}

export default App;
