
import { BsPersonFill } from "react-icons/bs";
import { BsPhone } from "react-icons/bs2";
import css from "./Contact.module.css";

export default function Contact({ data: { id, name, number }, onDelete }) {
  return (
    <div className={css.container}>
      <div>
        <p>
          <BsPersonFill className={css.myIcon} size="25" />
          {name}
        </p>
        <p>
          <BsPhone className={css.myIcon} size="25" />
          {number}
        </p>
      </div>

      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}