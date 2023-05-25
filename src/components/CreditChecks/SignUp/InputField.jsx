import React from "react";

import { Field, ErrorMessage } from 'formik';

const InputField = (props) => {

  const {
    text,
    type,
    name,
    placeholder,
    innerRef,
    value,
    onChange,
    id
  } = props;

  return (
    <li>
      <span className="left">{text}<em>*</em></span>
      <span className="right">
        <div>
          <Field
            type={type}
            name={name}
            placeholder={placeholder}
            innerRef={innerRef}
            onChange={onChange}
            value={value}
            id={id}
          />
          <ErrorMessage
            name={name}
            component="div"
            style={{ color: "red", fontSize: "small" }}
          />
        </div>
      </span>
    </li>
  )
}

export default InputField;
