import Button from "./Button";

// metadata を設定.
export default {
  // タイトル名. 階層化もできる.
  title: "Common/Button",
  // 対象のコンポーネント.
  component: Button,
};

// より柔軟に対応するため Args を利用する.
// テンプレート関数を準備. arg はコンポーネントに渡す props.
const Template = (args) => <Button {...args} />;
export const Default = Template.bind({});
Default.args = {
  children: "Default",
};

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary",
  color: "primary",
};

export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
  children: "Small",
  color: "primary",
  size: "sm",
};

export const PrimaryLarge = Template.bind({});
PrimaryLarge.args = {
  children: "Large",
  color: "primary",
  size: "lg",
};

export const Danger = Template.bind({});
Danger.args = {
  children: "Danger",
  color: "danger",
};
