import styles from "./Button.module.scss";

const Button = (props) => {
  const className = `${styles.button} ${props.className || ""}`;

  const args = {...props};
  delete args.className;

  return (
    <button className={className} {...args}>
      {props.children}
    </button>
  );
};

export default Button;