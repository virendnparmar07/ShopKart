import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./Register.css";

function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const {
        register,
        handleSubmit,
        getValues,
        reset,
        formState: { errors, isSubmitting },
    } = useForm({
        mode: "onTouched",
    });

    const onSubmit = (data) => {
        console.log("Registration data:", data);

        alert("Registration successful!");

        // Clear all fields after the popup is dismissed.
        reset();
        setShowPassword(false);
        setShowConfirmPassword(false);

        // Connect your registration API here.
    };

    return (
        <div className="login-page">
            <div className="login-card register-card">
                <Link to="/" className="back-home">
                    ← Back to home
                </Link>

                {/* Header */}
                <div className="login-header">
                    <div className="login-logo">
                        <span>✦</span>
                    </div>

                    <h1>Create Account</h1>

                    <p>
                        Join us and get started on your journey.
                        Create your account below.
                    </p>
                </div>

                {/* Registration form */}
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    {/* Full name */}
                    <div className="form-group">
                        <label htmlFor="name">
                            Full Name <span>*</span>
                        </label>

                        <div
                            className={`input-wrapper ${
                                errors.name ? "input-error" : ""
                            }`}
                        >
                            <span className="input-icon">♙</span>

                            <input
                                id="name"
                                type="text"
                                placeholder="Enter your full name"
                                autoComplete="name"
                                {...register("name", {
                                    required: "Name is required",
                                    minLength: {
                                        value: 2,
                                        message:
                                            "Name must have at least 2 characters",
                                    },
                                    pattern: {
                                        value: /^[A-Za-z\s.'-]+$/,
                                        message: "Please enter a valid name",
                                    },
                                })}
                            />
                        </div>

                        {errors.name && (
                            <p className="error-message">
                                {errors.name.message}
                            </p>
                        )}
                    </div>

                    {/* Email */}
                    <div className="form-group">
                        <label htmlFor="email">
                            Email Address <span>*</span>
                        </label>

                        <div
                            className={`input-wrapper ${
                                errors.email ? "input-error" : ""
                            }`}
                        >
                            <span className="input-icon">✉</span>

                            <input
                                id="email"
                                type="email"
                                placeholder="Enter your email address"
                                autoComplete="email"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message:
                                            "Please enter a valid email",
                                    },
                                })}
                            />
                        </div>

                        {errors.email && (
                            <p className="error-message">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    {/* Password */}
                    <div className="form-group">
                        <label htmlFor="password">
                            Password <span>*</span>
                        </label>

                        <div
                            className={`input-wrapper ${
                                errors.password ? "input-error" : ""
                            }`}
                        >
                            <span className="input-icon">♧</span>

                            <input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="Create a password"
                                autoComplete="new-password"
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 8,
                                        message:
                                            "Password must be at least 8 characters",
                                    },
                                    validate: {
                                        hasUppercase: (value) =>
                                            /[A-Z]/.test(value) ||
                                            "Include at least one uppercase letter",
                                        hasNumber: (value) =>
                                            /[0-9]/.test(value) ||
                                            "Include at least one number",
                                    },
                                })}
                            />

                            <button
                                type="button"
                                className="password-toggle"
                                onClick={() =>
                                    setShowPassword((prev) => !prev)
                                }
                                aria-label={
                                    showPassword
                                        ? "Hide password"
                                        : "Show password"
                                }
                            >
                                {showPassword ? "Hide" : "Show"}
                            </button>
                        </div>

                        {errors.password && (
                            <p className="error-message">
                                {errors.password.message}
                            </p>
                        )}

                        <small className="field-hint">
                            At least 8 characters, 1 uppercase letter and 1
                            number.
                        </small>
                    </div>

                    {/* Confirm password */}
                    <div className="form-group">
                        <label htmlFor="confirmPassword">
                            Confirm Password <span>*</span>
                        </label>

                        <div
                            className={`input-wrapper ${
                                errors.confirmPassword ? "input-error" : ""
                            }`}
                        >
                            <span className="input-icon">♧</span>

                            <input
                                id="confirmPassword"
                                type={
                                    showConfirmPassword ? "text" : "password"
                                }
                                placeholder="Confirm your password"
                                autoComplete="new-password"
                                {...register("confirmPassword", {
                                    required:
                                        "Please confirm your password",
                                    validate: (value) =>
                                        value === getValues("password") ||
                                        "Passwords do not match",
                                })}
                            />

                            <button
                                type="button"
                                className="password-toggle"
                                onClick={() =>
                                    setShowConfirmPassword((prev) => !prev)
                                }
                                aria-label={
                                    showConfirmPassword
                                        ? "Hide confirm password"
                                        : "Show confirm password"
                                }
                            >
                                {showConfirmPassword ? "Hide" : "Show"}
                            </button>
                        </div>

                        {errors.confirmPassword && (
                            <p className="error-message">
                                {errors.confirmPassword.message}
                            </p>
                        )}
                    </div>

                    {/* Terms */}
                    <div className="terms-group">
                        <input
                            type="checkbox"
                            id="terms"
                            {...register("terms", {
                                required: "You must agree to the terms",
                            })}
                        />

                        <label htmlFor="terms">
                            I agree to the{" "}
                            <a href="/terms">Terms and Conditions</a> and{" "}
                            <a href="/privacy">Privacy Policy</a>.
                        </label>
                    </div>

                    {errors.terms && (
                        <p className="error-message terms-error">
                            {errors.terms.message}
                        </p>
                    )}

                    {/* Register button */}
                    <button
                        type="submit"
                        className="login-btn"
                        disabled={isSubmitting}
                    >
                        {isSubmitting
                            ? "Creating account..."
                            : "Create Account"}
                        <span> → </span>
                    </button>

                    {/* Divider */}
                    <div className="form-divider">
                        <span></span>
                        <p>OR</p>
                        <span></span>
                    </div>

                    {/* Login link */}
                    <p className="signup-link">
                        Already have an account?
                        <Link to="/login"> Login</Link>
                    </p>
                </form>

                {/* Footer */}
                <div className="login-footer">
                    <span>SECURE REGISTRATION</span>
                    <span className="footer-dot">•</span>
                    <span>YOUR ACCOUNT, YOUR SPACE</span>
                </div>
            </div>
        </div>
    );
}

export default Register;