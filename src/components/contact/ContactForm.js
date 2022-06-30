import styled from 'styled-components';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import InputGroup from '../elements/InputGroup';
import TextAreaGroup from '../elements/TextAreaGroup';

const LoadingButton = styled.button`
  height: 1.5rem;
  width: 1.5rem;
`;

const ContactUsForm = ({
  values,
  touched,
  errors,
  isSubmitting,
  handleSubmit,
  handleChange,
  handleBlur,
}) => (
  <form onSubmit={handleSubmit}>
    <div className="row gh-1 gv-2">
      <div className="col-12 col-md-6 has-anim fade">
        <InputGroup
          name="firstName"
          placeholder="First Name*"
          type="text"
          value={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={
            errors.firstName && touched.firstName ? errors.firstName : undefined
          }
        />
      </div>

      <div className="col-6 col-md-6 has-anim fade">
        <InputGroup
          type="text"
          name="lastName"
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Last Name*"
          error={
            errors.lastName && touched.lastName ? errors.lastName : undefined
          }
        />
      </div>
      <div className="col-12 col-md-6 has-anim fade">
        <InputGroup
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Email*"
          error={errors.email && touched.email ? errors.email : undefined}
        />
      </div>
      <div className="col-12 col-md-6 has-anim fade">
        <InputGroup
          name="phone"
          type="text"
          value={values.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Phone Number*"
          error={errors.phone && touched.phone ? errors.phone : undefined}
        />
      </div>
      <div className="col-12 col-md-6 has-anim fade">
        <InputGroup
          name="projectType"
          type="text"
          value={values.projectType}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Project Type*"
          error={
            errors.projectType && touched.projectType
              ? errors.projectType
              : undefined
          }
        />
      </div>
      <div className="col-12 col-md-6 has-anim fade">
        <InputGroup
          name="company"
          type="text"
          value={values.company}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Company Name"
          error={errors.company && touched.company ? errors.company : undefined}
        />
      </div>
      <div className="col-12 has-anim fade">
        <TextAreaGroup
          rows="1"
          placeholder="About Project*"
          name="message"
          type="text"
          value={values.message}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.message && touched.message ? errors.message : undefined}
        />
      </div>
      <div className="col-12 has-anim fade">
        {isSubmitting ? (
          <LoadingButton className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </LoadingButton>
        ) : (
          <button
            className="btn btn-black"
            type="submit"
            disabled={isSubmitting}
          >
            Send
          </button>
        )}
      </div>
    </div>
  </form>
);

export default withFormik({
  mapPropsToValues: () => ({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    projectType: '',
    company: '',
    message: '',
  }),
  validationSchema: Yup.object().shape({
    firstName: Yup.string().required('First name is required!'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required!'),
    projectType: Yup.string().required('Project Type is required!'),
    message: Yup.string().required('Message is required!'),
  }),

  handleSubmit: (values, { setSubmitting, props, resetForm }) => {
    props.onSubmit(values).finally(() => {
      setSubmitting(false);
      resetForm();
    });
  },
  displayName: 'ContactUsForm', // helps with React DevTools
})(ContactUsForm);
