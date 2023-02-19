import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styles from "./Select.module.scss";

const Select = ({className, name, value, onChange, options, isTransformOptions = true}) => (
  <div className={`${styles.select} ${className ? className : ""}`}>
    <select name={name} value={value} onChange={e => onChange(e.target.value)}>
      {options.map((o) => (
        <option key={o} value={isTransformOptions ? transformOptionValue(o) : o}>{o}</option>
      ))}
    </select>
    <FontAwesomeIcon icon="fa-solid fa-angle-down"/>
  </div>
);

export default Select;

function transformOptionValue(text) {
  return text.replace(/(\w+)\s(\w+)/, (match, word1, word2) => {
    return word1.toLowerCase() + word2.charAt(0).toUpperCase() + word2.slice(1);
  });
}