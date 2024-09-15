import { ErrorMessage, Field, Form, Formik } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import s from "./ContactForm.module.css";

const ContactForm = ({ onAddContact }) => {
  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, options) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };

    onAddContact(newContact);
    options.resetForm();

    console.log(newContact);
  };

  const orderSchema = Yup.object().shape({
    name: Yup.string().min(3).max(50).required("required field"),
    number: Yup.string()
      .min(7)
      .max(12)
      .required("required field")
      .matches(/^[0-9]+$/, "Phone number must contain only digits"),
  });
  return (
    <div className={s.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={orderSchema}
      >
        <Form className={s.form}>
          <label className={s.label}>
            <span className={s.span}>Name</span>
            <Field
              name="name"
              className={s.input}
              placeholder="Enter your name"
            ></Field>
            <ErrorMessage name="name" component="span" className={s.error} />
          </label>
          <label className={s.label}>
            <span className={s.span}>Number</span>
            <Field
              name="number"
              className={s.input}
              placeholder="Enter your phone number"
            ></Field>
            <ErrorMessage name="number" component="span" className={s.error} />
          </label>

          <button type="submit" className={s.btn}>
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
