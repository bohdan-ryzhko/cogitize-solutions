import sass from "./CheckBox.module.scss";
import { useReduxState } from "@/hooks";
import { ChangeEvent, FC } from "react";
import { MdCheck } from "react-icons/md";

type CheckBoxProps = {
  name: string,
  value: string,
  text: string,
  handleChangeCheckbox: (e: ChangeEvent<HTMLInputElement>) => void,
}

export const CheckBox: FC<CheckBoxProps> = ({ name, value, text, handleChangeCheckbox }) => {
  const { posts: { postsList, currentPost } } = useReduxState();

  const isCurrentCheck = postsList[currentPost].responsibilities.find(responsibility => responsibility.name === name)!.checkboxes.includes(value);

  return (
    <label className={sass.label} htmlFor={value}>
      <input
        className={sass.input}
        type="checkbox"
        onChange={handleChangeCheckbox}
        name={name}
        value={value}
        id={value}
        checked={isCurrentCheck}
      />
      <span className={isCurrentCheck ? sass.customCheckBoxActive : sass.customCheckBox}>
        {
          isCurrentCheck && <MdCheck size={13} color="#6764F1" />
        }
      </span>
      <span>{text}</span>
    </label>
  )
};
