import { useState } from "react";
import errorIcon from "../assets/icon-error.svg";

const IntroSignup = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    setErrors((prevError) => ({
      ...prevError,
      [name]: "",
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let newErrors = {};

    if (!formData.firstname) {
      newErrors.firstname = "First Name cannot be empty";
    }

    if (!formData.lastname) {
      newErrors.lastname = "Last Name cannot be empty";
    }

    if (!formData.email) {
      newErrors.email = "Email Address cannot be empty";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Looks like this is not an email";
    }

    if (!formData.password) {
      newErrors.password = "Password cannot be empty";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted successfully", formData);
      setFormData({ firstname: "", lastname: "", email: "", password: "" });
    }
  };

  return (
    <div className="container">
      <section className="intro__content">
        <h1 className="intro__title">Learn to code by watching others</h1>
        <p className="intro__description">
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </section>

      <section className="intro__form__section">
        <div className="intro__pricing">
          <p className="intro__pricing__text">
            <strong>Try it free 7 days </strong>then $20/mo. thereafter
          </p>
        </div>

        <form className="intro__form" onSubmit={handleSubmit} noValidate>
          <div className="intro__input-group">
            <div className="intro__input-wrapper">
              <input
                type="text"
                name="firstname"
                placeholder="First Name"
                value={formData.firstname}
                onChange={handleChange}
                data-error={errors.firstname ? "true" : "false"}
              />
              {errors.firstname && (
                <img src={errorIcon} alt="Error" className="error-icon" />
              )}
            </div>
            {errors.firstname && (
              <p className="intro__error-text">{errors.firstname}</p>
            )}
          </div>

          <div className="intro__input-group">
            <div className="intro__input-wrapper">
              <input
                type="text"
                name="lastname"
                placeholder="Last Name"
                value={formData.lastname}
                onChange={handleChange}
                data-error={errors.lastname ? "true" : "false"}
              />
              {errors.lastname && (
                <img src={errorIcon} alt="Error" className="error-icon" />
              )}
            </div>
            {errors.lastname && (
              <p className="intro__error-text">{errors.lastname}</p>
            )}
          </div>

          <div className="intro__input-group">
            <div className="intro__input-wrapper">
              <input
                type="text"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                data-error={errors.email ? "true" : "false"}
              />
              {errors.email && (
                <img src={errorIcon} alt="Error" className="error-icon" />
              )}
            </div>
            {errors.email && (
              <p className="intro__error-text">{errors.email}</p>
            )}
          </div>

          <div className="intro__input-group">
            <div className="intro__input-wrapper">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                data-error={errors.password ? "true" : "false"}
              />
              {errors.password && (
                <img src={errorIcon} alt="Error" className="error-icon" />
              )}
            </div>
            {errors.password && (
              <p className="intro__error-text">{errors.password}</p>
            )}
          </div>

          <button type="submit" className="intro__form__btn">
            claim your free trail
          </button>

          <p className="intro__form__footer">
            By clicking the button, you are agreeing to our
            <span> Terms and Services</span>
          </p>
        </form>
      </section>
    </div>
  );
};

export default IntroSignup;
