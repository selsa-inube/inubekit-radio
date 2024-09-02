import styled from "styled-components";
import { inube } from "@inubekit/foundations";

const StyledLabel = styled.label`
  display: inline-block;
  position: relative;
  width: 16px;
  height: 16px;
`;

const StyledInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    border-color: ${({ theme }) =>
      theme?.radiofield?.border?.color?.checked ||
      inube.radiofield.border.color.checked};
    background-color: ${({ theme }) =>
      theme?.radiofield?.background?.color?.checked ||
      inube.radiofield.background.color.checked};

    &:after {
      content: "";
      display: block;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: ${({ theme }) =>
        theme?.radiofield?.foreground?.color?.checked ||
        inube.radiofield.foreground.color.checked};
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  &:focus + span {
    outline: 2px solid
      ${({ theme }) =>
        theme?.radiofield?.outline?.color?.hover ||
        inube.radiofield.outline.color.hover};
    outline-offset: 2px;
  }

  &:disabled + span {
    border-color: ${({ theme }) =>
      theme?.radiofield?.border?.color?.disabled ||
      inube.radiofield.border.color.disabled};
    background-color: ${({ theme }) =>
      theme?.radiofield?.background?.color?.disabled ||
      inube.radiofield.background.color.disabled};
  }
`;

const StyledSpan = styled.span`
  display: inline-block;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 2px solid
    ${({ theme }) =>
      theme?.radiofield?.border?.color?.active ||
      inube.radiofield.border.color.active};
  background-color: ${({ theme }) =>
    theme?.radiofield?.background?.color?.active ||
    inube.radiofield.background.color.active};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &:hover {
    border-color: ${({ theme }) =>
      theme?.radiofield?.outline?.color?.hover ||
      inube.radiofield.outline.color.hover};
  }
`;

export { StyledLabel, StyledInput, StyledSpan };
