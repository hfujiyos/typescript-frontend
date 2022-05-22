## ｼﾞｪﾈﾘｸｽ（Generics）

抽象的にｴｲﾘｱｽ定義し、動的に型引数を定義

### ｼﾞｪﾈﾘｸｽ型引数（ﾃﾞﾌｫﾙﾄ無）

```
interface GEN<T> {
  item: T;
}
const gen0: GEN<string> = { item: 'hello' };
const gen1: GEN<number> = { item: 12 };
```

### ｼﾞｪﾈﾘｸｽ型引数（ﾃﾞﾌｫﾙﾄ有）

```
interface GEN1<T = string> {
  item: T;
}
const gen3: GEN1 = { item: 'hello' };
```

### ｼﾞｪﾈﾘｸｽ型引数（extends 制約｜合併型）

```
interface GEN2<T extends string | number> {
  item: T;
}
const gen4: GEN2<number> = { item: 12 };
```

### ｼﾞｪﾈﾘｸｽ関数

```
function funcGen<T>(props: T) {
  return { item: props };
}
const gen6 = funcGen<string>('test');
const gen7 = funcGen<string | null>(null);
```

### ｼﾞｪﾈﾘｸｽ関数（extends 制約｜合併型）

```
function funcGen1<T extends string | null>(props: T) {
  return { value: props };
}
const gen8 = funcGen1('hello');
const gen9 = funcGen1(null);
```

## ﾌﾟﾛｯﾌﾟｽ（Props）

ｺﾝﾎﾟｰﾈﾝﾄ間の値渡し

### Props ﾌｧﾝｸｼｮﾝ構文（extends 制約）

```
interface Props {
  price: number;
}
function funcGen3<T extends Props>(props: T) {
  return { value: props.price };
}
const gen10 = funcGen3({ price: 10 });
```

### Props ｱﾛｰ関数構文（extends 制約）

```
type PropsAllow = {
  price: number;
};
const funcGen4 = <T extends PropsAllow>(props: T) => {
  return { value: props.price };
};
```

## 参考文献

- [Qiita ｜【TypeScript】Generics(ジェネリックス)を理解する](https://qiita.com/k-penguin-sato/items/9baa959e8919157afcd4)
- [Zenn ｜ React + TypeScript で props と型を便利に扱う Tips 集](https://zenn.dev/so_nishimura/articles/e9afde3b7dc779)
