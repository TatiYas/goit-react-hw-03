
import { BsPersonFill } from "react-icons/bs";
import { HiPhone } from "react-icons/hi2";
import s from "./Contact.module.css";

export default function Contact({ data: { id, name, number }, onDelete }) {
  return (
    <div className={s.container}>
      <div>
        <p>
          <BsPersonFill className={s.myIcon} size="25" />
          {name}
        </p>
        <p>
          <HiPhone className={s.myIcon} size="25" />
          {number}
        </p>
      </div>

      <button className={s.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}