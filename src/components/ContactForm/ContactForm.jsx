import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import { useId } from "react";
import s from "./ContactForm.module.css";

export default function ContactForm({ onAdd }) {
  const fieldId = useId();

  const handleSubmit = (values, actions) => {
    onAdd({ id: nanoid(), ...values });
    actions.resetForm();
  };

  const UserSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required!"),
    number: Yup.string()
      .min(7, "Minimum 7 digits!")
      .max(9, "Too long!")
      .required("Required!"),
  });

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={UserSchema}
      onSubmit={handleSubmit}
    >
      <Form className={s.form}>
        <div className={s.fieldContainer}>
          <label htmlFor={`name-${fieldId}`}>Name</label>
          <Field name="name" id={`name-${fieldId}`} className={s.field} />
          <ErrorMessage name="name" component="span" className={s.error} />
        </div>
        <div className={s.fieldContainer}>
          <label htmlFor={`number-${fieldId}`}>Number</label>
          <Field name="number" id={`number-${fieldId}`} className={s.field} />
          <ErrorMessage name="number" component="span" className={s.error} />
        </div>
        <button className={s.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}