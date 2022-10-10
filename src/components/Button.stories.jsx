import Button from "./Button";

// metadata を設定.
export default {
  // タイトル名. 階層化もできる.
  title: "Common/Button",
  // 対象のコンポーネント.
  component: Button,
};

export const Default = () => <Button>ハロー</Button>;

export const Primary = () => <Button color="primary">クリック</Button>;

export const Danger = () => <Button color="danger">Danger</Button>;
