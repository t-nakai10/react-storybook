import Button from "./Button";

// metadata を設定.
export default {
  // タイトル名. 階層化もできる.
  title: "Common/Button",
  // 対象のコンポーネント.
  component: Button,
};

export const HelloButton = () => <Button>ハロー</Button>;

export const ClickButton = () => <Button>クリック</Button>;
