"use client";
import sass from "./Responsibilities.module.scss";
import { useFormik } from "formik";
import { FC } from "react";

export const Responsibilities: FC = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className={sass.responsibilitiesBody}>
      <div className={sass.responsibilitiesHeder}>
        <h2 className={sass.title}>Обязаности</h2>
      </div>
      <form
        onSubmit={formik.handleSubmit}
        className={sass.form}
      >
        <div className={sass.responsibilitiesContent}>
          <p>content</p>
        </div>
        <button className={sass.submitBtn} type="submit">Сохранить</button>
      </form>
    </div>
  )
};
