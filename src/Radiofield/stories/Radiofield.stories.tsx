import { IRadiofield } from "..";
import { RadiofieldController } from "./Radiofield.Controller";
import { parameters, props } from "../props";

const story = {
  title: "Inputs/Radiofield",
  component: RadiofieldController,
  parameters,
  argTypes: props,
};

const Default = (args: IRadiofield) => <RadiofieldController {...args} />;

Default.args = {
  id: "radio1",
  label: "Label",
  name: "radioGroup",
  checked: false,
  disabled: false,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
    console.log(`Radiofield value: ${e.target.value}`),
};

export { Default };
export default story;
