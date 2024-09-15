import { Field, Form, Formik } from "formik";
import s from "./ContactForm.module.css";
// import { number } from "yup";

const ContactForm = () => {
  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, options) => {
    console.log("SRART");
    console.log(values);
    options.resetForm();
  };
  return (
    <div className={s.container}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <label className={s.label}>
            <span className={s.span}>Name</span>
            <Field
              name="name"
              className={s.input}
              placeholder="Enter your name"
            ></Field>
          </label>
          <label className={s.label}>
            <span className={s.span}>Number</span>
            <Field
              name="number"
              className={s.input}
              placeholder="Enter your phone number"
            ></Field>
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
