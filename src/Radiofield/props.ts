const parameters = {
  docs: {
    descriptions: {
      component:
        "A Radiofield component allows the user to select a single option from a list of multiple choices. It is a part of the form controls and interacts with other Radiofields to form a group where only one option can be selected at a time.",
    },
  },
};

const props = {
  checked: {
    description:
      "(boolean) (Optional): Indicates whether the Radiofield is currently selected. If true, the Radiofield will appear checked.",
  },
  disabled: {
    description:
      "(boolean) (Optional): Disables the Radiofield, preventing any user interaction. If true, the Radiofield will appear grayed out and non-interactive.",
  },
  id: {
    description:
      "(string): A unique identifier for the Radiofield. This ID links the input with the label, ensuring the label is clickable and accessible.",
  },
  label: {
    description:
      "(string) (Optional): The text label displayed next to the Radiofield. This label provides a description of the option the Radiofield represents.",
  },
  name: {
    description:
      "(string) (Optional): The name attribute groups Radiofields together. Radiofields with the same name form a group where only one option can be selected.",
  },
  onChange: {
    description:
      "(Function): A callback function that is triggered whenever the Radiofield's state changes (e.g., when a user selects or deselects the Radiofield). The function receives the change event as an argument.",
  },
  required: {
    description:
      "(boolean) (Optional): Marks the Radiofield as required in form submissions. If true, the user must select this option to proceed with the form.",
  },
  value: {
    description:
      "(string): The value attribute of the Radiofield. This value is submitted with the form data when the Radiofield is selected.",
  },
};

export { parameters, props };
