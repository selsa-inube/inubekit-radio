import { useState } from "react";
import { IRadiofield, Radiofield } from "..";

const RadiofieldController = (props: IRadiofield) => {
  const { checked } = props;

  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
    props.onChange(event);
  };

  return <Radiofield {...props} checked={isChecked} onChange={handleChange} />;
};

export { RadiofieldController };
