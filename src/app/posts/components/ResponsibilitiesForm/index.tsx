"use client";
import sass from "./ResponsibilitiesForm.module.scss";
import { useFormik } from "formik";
import { ChangeEvent, FC } from "react";
import { getInitialValuesResponsibilities } from "@/utils";
import { useReduxState } from "@/hooks";
import { CheckBox } from "../CheckBox";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux";
import { addResponsibility, removePost, removeResponsibility, setCurrentPost } from "@/redux/posts/slice";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

export const ResponsibilitiesForm: FC = () => {
  const { posts: { postsList, currentPost } } = useReduxState();

  const currentResponsibilities = postsList[currentPost].responsibilities;

  const dispatch = useDispatch<AppDispatch>();

  const formik = useFormik({
    initialValues: getInitialValuesResponsibilities(currentResponsibilities),
    onSubmit: () => {
      alert(JSON.stringify(postsList, null, 2));
    },
  });

  const handleChangeCheckbox = (event: ChangeEvent<HTMLInputElement>) => {
    formik.handleChange(event);
    const { checked, value, name } = event.target;

    const checkedInfo = {
      currentPost,
      value,
      name,
    }

    if (checked) {
      dispatch(addResponsibility(checkedInfo));
      return;
    }

    dispatch(removeResponsibility(checkedInfo));
  }

  const handleRemovePost = () => {
    dispatch(removePost(currentPost));
    dispatch(setCurrentPost(0));
    toast.info(`${postsList[currentPost].name} was deleted successfully!`);
  }

  return (
    <form
      onSubmit={formik.handleSubmit}
      className={sass.form}
    >
      <div className={sass.responsibilitiesContent}>
        <div className={sass.checkboxGroup}>
          <h3 className={sass.groupTitle}>Торговля</h3>
          <CheckBox handleChangeCheckbox={handleChangeCheckbox} text="Продавать продукт" name="commerce" value="sales-products" />
          <CheckBox handleChangeCheckbox={handleChangeCheckbox} text="Выставлять цены" name="commerce" value="set-prices" />
          <CheckBox handleChangeCheckbox={handleChangeCheckbox} text="Смотреть аналитику" name="commerce" value="watch-analytics" />
        </div>
        <div className={sass.checkboxGroup}>
          <h3 className={sass.groupTitle}>Производство</h3>
          <CheckBox handleChangeCheckbox={handleChangeCheckbox} text="Закупать сырье" name="production" value="purchase-raw-materials" />
          <CheckBox handleChangeCheckbox={handleChangeCheckbox} text="Назначать рабочих" name="production" value="assign-workers" />
        </div>
        <div className={sass.checkboxGroup}>
          <h3 className={sass.groupTitle}>Разборки</h3>
          <CheckBox handleChangeCheckbox={handleChangeCheckbox} text="Дуель" name="showdown" value="duel" />
          <CheckBox handleChangeCheckbox={handleChangeCheckbox} text="Выставлять претензии" name="showdown" value="make-claim" />
        </div>
        <div className={sass.checkboxGroup}>
          <h3 className={sass.groupTitle}>Разборки</h3>
          <CheckBox handleChangeCheckbox={handleChangeCheckbox} text="Назначать должности" name="management" value="assign-positions" />
          <CheckBox handleChangeCheckbox={handleChangeCheckbox} text="Выгонять из банды" name="management" value="kick-from-band" />
        </div>
      </div>
      <div className={sass.btnsWrapper}>
        <button className={sass.submitBtn} type="submit">Сохранить</button>
        <button
          onClick={handleRemovePost}
          className={sass.removeBtn}
          type="button"
        >
          <FaTrash color="#6764f1" />
        </button>
      </div>
    </form>
  )
};
