import { useReduxState } from "@/hooks";
import { ChangeEvent, FC } from "react";

type CheckBoxProps = {
  name: string,
  value: string,
  text: string,
  handleChangeCheckbox: (e: ChangeEvent<HTMLInputElement>) => void,
}

export const CheckBox: FC<CheckBoxProps> = ({ name, value, text, handleChangeCheckbox }) => {
  const { posts: { postsList, currentPost } } = useReduxState();

  const isCurrentCheck = postsList[currentPost].responsibilities.find(responsibility => responsibility.name === name);

  return (
    <label htmlFor={value}>
      <input
        type="checkbox"
        onChange={handleChangeCheckbox}
        name={name}
        value={value}
        id={value}
        checked={isCurrentCheck!.checkboxes.includes(value)}
      />
      <span>{text}</span>
    </label>
  )
};
