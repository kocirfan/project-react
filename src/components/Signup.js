import React from "react";
import { useFormik } from "formik";
import  validationSchema from "./validation";

function Signup() {
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },

    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema,
  });
  
  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input id="email" name="email" onChange={handleChange} onBlur={handleBlur} />

        {errors.email && touched.email && <div className="error">{errors.email}</div>}
        <br></br>
        <br></br>

        <label>Password</label>
        <input
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.password && touched.password && <div className="error">{errors.password}</div>}

        <br></br>
        <br></br>

        <label>Confirm Password</label>
        <input
          name="passwordConfirm"
          value={values.passwordConfirm}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.passwordConfirm && touched.passwordConfirm && <div className="error">{errors.passwordConfirm}</div>}
        <br></br>
        <br></br>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Signup;
