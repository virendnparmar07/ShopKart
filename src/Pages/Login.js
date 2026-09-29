import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm({
        mode: "onTouched",
    });

    const onSubmit = (data) => {
        console.log("Login data:", data);

        alert("Login successful!");

        // Clear all form fields after the popup is dismissed.
        reset();
        setShowPassword(false);

        // Connect your authentication API here.
    };

    return (
        <div className="login-page">
            <div className="login-card">
                <Link to="/" className="back-home">
                    ← Back to home
                </Link>

                {/* Header */}
                <div className="login-header">
                    <div className="login-logo">
                        <span>✦</span>
                    </div>

                    <h1>Welcome Back</h1>

                    <p>
                        Sign in to your account and
                        continue your journey.
                    </p>
                </div>

                {/* Login Form */}
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
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
                                        message: "Please enter a valid email",
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
                                placeholder="Enter your password"
                                autoComplete="current-password"
                                {...register("password", {
                                    required: "Password is required",
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
                    </div>

                    {/* Remember me and Forgot password */}
                    <div className="login-options">
                        <label className="remember-me">
                            <input
                                type="checkbox"
                                {...register("rememberMe")}
                            />
                            <span>Remember me</span>
                        </label>

                        <Link to="/forgot-password">
                            Forgot password?
                        </Link>
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="login-btn"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Logging in..." : "Login"}
                        <span> → </span>
                    </button>

                    {/* Divider */}
                    <div className="form-divider">
                        <span></span>
                        <p>OR</p>
                        <span></span>
                    </div>

                    {/* Signup link */}
                    <p className="signup-link">
                        Don't have an account?
                        <Link to="/register"> Sign up</Link>
                    </p>
                </form>

                {/* Footer */}
                <div className="login-footer">
                    <span>SECURE LOGIN</span>
                    <span className="footer-dot">•</span>
                    <span>YOUR ACCOUNT, YOUR SPACE</span>
                </div>
            </div>
        </div>
    );
}

export default Login;