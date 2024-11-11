import React from 'react';
    import { Formik, Form, Field, ErrorMessage } from 'formik';
    import * as Yup from 'yup';
    import { motion } from 'framer-motion';
    import './Contact.css';

    const ContactSchema = Yup.object().shape({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      subject: Yup.string().required('Subject is required'),
      message: Yup.string().required('Message is required'),
    });

    function Contact() {
      return (
        <motion.div
          className="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1>Contact</h1>
          <Formik
            initialValues={{ name: '', email: '', subject: '', message: '' }}
            validationSchema={ContactSchema}
            onSubmit={(values, { resetForm }) => {
              console.log(values);
              resetForm();
            }}
          >
            {({ isSubmitting }) => (
              <Form className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <Field type="text" name="name" />
                  <ErrorMessage name="name" component="div" className="error" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <Field type="email" name="email" />
                  <ErrorMessage name="email" component="div" className="error" />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <Field type="text" name="subject" />
                  <ErrorMessage name="subject" component="div" className="error" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <Field as="textarea" name="message" />
                  <ErrorMessage name="message" component="div" className="error" />
                </div>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  className="submit-button"
                >
                  Submit
                </motion.button>
              </Form>
            )}
          </Formik>
        </motion.div>
      );
    }

    export default Contact;
