import {library} from "@fortawesome/fontawesome-svg-core";
import {faMagnifyingGlass, faXmark} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Input from "../Input/Input";
import styles from "./InputSearch.module.scss";

library.add(faMagnifyingGlass, faXmark);

const InputSearch = ({className, placeholder, value, setValue}) => (
  <div className={`${styles.searchBar} ${className || ""}`}>
    <Input type="search" placeholder={placeholder} value={value} setValue={setValue}/>
    <FontAwesomeIcon className={styles.glass} icon="fa-solid fa-magnifying-glass"/>
    <FontAwesomeIcon className={styles.xMark}
                     icon="fa-solid fa-xmark"
                     style={value ? {display: "block"} : {}}
                     onClick={() => setValue("")}
    />
  </div>
);

export default InputSearch;