import { Field, Form, Formik } from "formik";
import s from "./ContactForm.module.css";
// import { number } from "yup";

const ContactForm = () => {
  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = () => console.log("SRART");
  return (
    <div className={s.container}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field name="name"></Field>
          <Field name="number"></Field>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
