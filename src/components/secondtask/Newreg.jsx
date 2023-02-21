import React from "react";
import { Container, Button, Form, FloatingLabel } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";

function Newreg() {
  const doregister = (values) => {
    console.log("form values", values);
    setTimeout(() => {
      formik.setSubmitting(false);
      formik.resetForm();
    }, 2000);
  };

  const formik = useFormik({
    // initialValues
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    //validation schema
    validationSchema: Yup.object({
      username: Yup.string()
        .required("Username tidak boleh kosong!.")
        .min(3, "email minimal 3 huruf"),
      email: Yup.string()
        .required("Email tidak boleh kosong!.")
        .email("Email tidak benar"),
      password: Yup.string()
        .required("Password tidak boleh kosong!.")
        .matches(
          /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
          "Password harus menggunakan huruf kapital, huruf kecil, angka, dan simbol "
        ),
    }),
    //handle submission
    onSubmit: doregister,
  });
  console.log(formik);

  return (
    <Container
      style={{
        width: "400px",
        margin: "100px auto 0",
        padding: "10px",
      }}
    >
      <h1 className="mb-3 text-center">Register Account</h1>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group>
          <FloatingLabel
            controlId="floatingTextarea"
            label="Username"
            className="mb-3"
          >
            <Form.Control
              onChange={formik.handleChange}
              value={formik.values.username}
              type="text"
              placeholder="Username"
              name="username"
              isInvalid={
                formik.touched.username &&
                formik.errors.username && (
                  <div className="error">{formik.errors.username}</div>
                )
              }
              onBlur={formik.handleBlur}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.username}
            </Form.Control.Feedback>
          </FloatingLabel>
        </Form.Group>
        <Form.Group>
          <FloatingLabel
            controlId="floatingTextarea"
            label="Email"
            className="mb-3"
          >
            <Form.Control
              onChange={formik.handleChange}
              value={formik.values.email}
              type="email"
              placeholder="Email"
              name="email"
              isInvalid={
                formik.touched.email &&
                formik.errors.email && (
                  <div className="error">{formik.errors.email}</div>
                )
              }
              onBlur={formik.handleBlur}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.email}
            </Form.Control.Feedback>
          </FloatingLabel>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please choose a email.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <FloatingLabel
            controlId="floatingTextarea"
            label="Password"
            className="mb-3"
          >
            <Form.Control
              onChange={formik.handleChange}
              value={formik.values.password}
              type="password"
              placeholder="Password"
              name="password"
              isInvalid={
                formik.touched.password &&
                formik.errors.password && (
                  <div className="error">{formik.errors.password}</div>
                )
              }
              onBlur={formik.handleBlur}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.password}
            </Form.Control.Feedback>
          </FloatingLabel>
          <Form.Control.Feedback type="invalid">
            Password.
          </Form.Control.Feedback>
        </Form.Group>
        <Button
          disabled={formik.isSubmitting}
          variant="success"
          style={{ margin: "10px auto" }}
          type="submit"
        >
          Register
        </Button>
      </Form>
    </Container>
  );
}

export default Newreg;
