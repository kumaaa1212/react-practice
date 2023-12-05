import { memo } from "react";
// カスタム比較関数
// 渡ってきたpropsが同じならtrueを返す。
// 渡ってきたpropsが違うならfalseを返す。
// 依存関係に入れて、判断している

function component(oldProps: any, newProps: any): boolean {
  if (oldProps === newProps) {
    return true;
  }
  return false;
}

export const Performance2 = memo(() => {
  return (
    <div>
      <h3>Performance1</h3>
    </div>
  );
}, component);
