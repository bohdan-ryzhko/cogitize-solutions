"use client";
import sass from "./AddNewPositionModal.module.scss";
import { FormikHelpers, useFormik } from "formik";
import { Dispatch, FC, SetStateAction } from "react";
import { LabelInput } from "..";
import { useDispatch } from "react-redux";
import { AppDispatch, addPost } from "@/redux";
import { getRandomId } from "@/utils";
import * as Yup from 'yup';
import { Responsibility } from "@/d";

const digitsRegex = /^[0-9]+$/;

const validationSchema = Yup.object().shape({
  name: Yup
    .string()
    .min(5, 'Minimum 5 characters')
    .max(15, 'Maximum 15 characters')
    .required('Required'),
  price: Yup
    .string()
    .matches(digitsRegex, 'Price must contain only digits')
    .required('Required'),
  amountTasks: Yup
    .string()
    .matches(digitsRegex, 'Amount tasks must contain only digits')
    .required('Required'),
});

type NewPost = {
  name: string,
  price: string,
  amountTasks: string,
  id?: number,
  responsibilities: Responsibility[],
}

const initialValues: NewPost = {
  name: "",
  price: "",
  amountTasks: "",
  responsibilities: [],
}

type AddNewPositionModalProps = {
  setIsOpen: Dispatch<SetStateAction<boolean>>,
  isOpen: boolean,
}

export const AddNewPositionModal: FC<AddNewPositionModalProps> = ({ isOpen, setIsOpen }) => {

  const dispatch = useDispatch<AppDispatch>();

  const onSubmit = (values: NewPost, formikHelpers: FormikHelpers<NewPost>) => {
    const newPost = {
      ...values,
      price: Number(values.price),
      amountTasks: Number(values.price),
      id: `item-${getRandomId()}`,
      responsibilities: [
        { title: "Торговля", name: "commerce", checkboxes: [] },
        { title: "Разборки", name: "showdown", checkboxes: [] },
        { title: "Производство", name: "production", checkboxes: [] },
        { title: "Управление", name: "management", checkboxes: [] },
      ],
    }

    dispatch(addPost(newPost));
    // formikHelpers.resetForm();
    setIsOpen(false);
  }

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <form
      className={isOpen ? sass.formActive : sass.form}
      onSubmit={formik.handleSubmit}
    >
      <LabelInput
        name="name"
        formik={formik}
      />
      <LabelInput
        name="price"
        formik={formik}
      />
      <LabelInput
        name="amountTasks"
        formik={formik}
      />
      <button className={sass.submitBtn} type="submit">Добавить новую должность</button>
    </form>
  )
}
