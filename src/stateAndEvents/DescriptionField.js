import React from 'react';
import styles from "./DescriptionFiled.module.css"

const DescriptionField = ({name, value}) => {
    return (
        <div>
        <p> 
            <span className={styles.descriptionAttr}>{name}</span>{value}
        </p>
 
        </div>
    )
  }
  export default DescriptionField;