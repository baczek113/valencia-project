import "./CInput.css";
import { CInputIF } from "../../../interfaces";

const CInput: React.FC<CInputIF> = ({ type, name, placeholder, onChange, onBlur }) => {
  return (
    <input
      className="custom-input"
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
      onBlur={(e: React.ChangeEvent<HTMLInputElement>) => onBlur(e)}
    />
  );
};

export default CInput;
