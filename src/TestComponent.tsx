import React, { useState } from 'react';

/**
 * Props型定義式
 * @param text ﾃｷｽﾄ情報
 */
type Props = {
  text: string;
};

/**
 * UserData型定義式
 * @param id ID情報
 * @param name 名前情報
 */
type UserData = {
  id: number;
  name: string;
};

/**
 * ﾃｽﾄｺﾝﾎﾟｰﾈﾝﾄ
 * @param text ﾃｷｽﾄ情報
 * @returns ﾃｽﾄﾋﾞｭｰ
 */
const TestComponent: React.FC<Props> = (props) => {
  // State更新処理（初期値設定）
  const [count, setCount] = useState<number | null>(0);
  const [user, setuser] = useState<UserData>({ id: 1, name: 'dummy' });
  const [inputData, setInputData] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputData(e.target.value);
  };

  // ﾃｽﾄﾋﾞｭｰ
  return (
    <div>
      <h1>{props.text}</h1>
      <input type='text' value={inputData} onChange={handleInputChange} />
      <h1>{inputData}</h1>
    </div>
  );
};
export default TestComponent;
