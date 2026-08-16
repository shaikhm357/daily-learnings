//@ts-nocheck
import React, { useState } from "react";
const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    agreeToTerm: false,
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  // capture form data
  const changeHandler = (e) => {
    let { value, name, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type == "checkbox" ? checked : value,
    }));
  };

  // submit the form data
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validateErr = validate();
    setErrors(validateErr);

    if (Object.keys(validateErr).length == 0) {
      setSubmitting(true);
      await new Promise((res, rej) => {
        setTimeout(() => {
          res("resovled");
        }, 2000);
      });
      alert("Registered successfully");
      setSubmitting(false);
    }
  };

  // form validations
  const validate = () => {
    const newErrors = {};
    if (!formData.username.trim()) newErrors.username = "Username is required";

    if (!formData.email.includes("@"))
      newErrors.email = "Invalid email address";

    if (formData.password.length < 8)
      newErrors.password = "Minimum 8 characters";

    if (!formData.agreeToTerm) newErrors.agreeToTerm = "Must agree to terms";

    return newErrors;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="username"
          id=""
          placeholder="Username"
          onChange={changeHandler}
        />
        {errors.username && (
          <p style={{ color: "red", fontWeight: "lighter" }}>
            {errors.username}
          </p>
        )}
      </div>
      <div>
        <input
          type="text"
          name="email"
          id=""
          placeholder="Email"
          onChange={changeHandler}
        />
        {errors.email && (
          <p style={{ color: "red", fontWeight: "lighter" }}>{errors.email}</p>
        )}
      </div>
      <div>
        <input
          type="password"
          name="password"
          id=""
          value={formData.password}
          placeholder="Password"
          onChange={changeHandler}
        />
        {errors.password && (
          <p style={{ color: "red", fontWeight: "lighter" }}>
            {errors.password}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="">
          <input
            type="checkbox"
            name="agreeToTerm"
            id=""
            onChange={changeHandler}
            checked={formData.agreeToTerm}
          />
          I agree to the terms
        </label>
        {errors.agreeToTerm && (
          <p style={{ color: "red", fontWeight: "lighter" }}>
            {errors.agreeToTerm}
          </p>
        )}
      </div>
      <button>{submitting ? "submitting" : "Register"}</button>
      <p>{JSON.stringify(formData)}</p>
    </form>
  );
};

export default RegistrationForm;
