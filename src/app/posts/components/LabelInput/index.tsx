"use client";
import sass from "./LabelInput.module.scss";
import { FormikValues } from "formik";
import { FC } from "react";

type LabelInputProps = {
  name: string,
  formik: FormikValues,
}

export const LabelInput: FC<LabelInputProps> = ({ formik, name }) => {
  const isError = formik.touched[name] && formik.errors[name];

  return (
    <label className={isError ? sass.labelError : sass.label} htmlFor={name}>
      {name}
      <input
        className={isError ? sass.inputError : sass.input}
        id={name}
        name={name}
        type="text"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values[name]}
      />
      {
        isError && <p className={sass.errorText}>{formik.errors[name]}</p>
      }
    </label>
  )
}
