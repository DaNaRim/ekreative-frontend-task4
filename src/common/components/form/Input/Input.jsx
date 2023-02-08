import styles from "./Input.module.scss";

const Input = ({type, placeholder, value, setValue}) => {

  const id = `inp-${type}-${Math.random()}`;

  return (
    <p className={styles.inputWrapper}>
      <input type={type} id={id} placeholder=" " value={value} onChange={e => setValue(e.target.value)}/>
      <label htmlFor={id}>{placeholder}</label>
    </p>
  );
};

export default Input;