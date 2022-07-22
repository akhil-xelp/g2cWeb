import "../signInPage/signin.css";
import "../global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ForgotPin.css";

const ForgotPinComponent = () => {
  return (
    <>
      <img
        alt="logo"
        className="logoCSS"
        src="https://icon-library.com/images/m-icon/m-icon-7.jpg"
      />

      <form className="formContainer">
        <p className="signinText">Forgot security PIN?</p>

        <label className="labelcss" for="adhaarInput">
          Enter aadhaar
        </label>
        <input
          type="number"
          id="adhaarInput"
          placeholder="Aadhaar/ Mobile Number*"
          className="inputcss"
        />

        <label className="labelcss" for="adhaarInput">
          Verify your Date of Birth*
        </label>
        <form className="otpForm">
          <input className="DOBInputField" maxlength="2" type="number" />
          <input className="DOBInputField" maxlength="2" type="number" />
          <input className="DOBInputField" maxlength="4" type="number" />
        </form>

        <p className="formText">
          Please enter your date of birth as per <br/>your account
        </p>
        <button type="submit" className="buttonCss">
          Sign In
        </button>
        <p className="signUpText">
          Do not have an account?{" "}
          <a href="javascript:void(0);" className="signUpcss">
            Sign Up
          </a>
        </p>
        <p className="tctext">
          By signing in, you are agreeing with our
          <a className="signUpcss" href="javascript:void(0);">
            {" "}
            Terms & Conditions
          </a>
        </p>
      </form>
    </>
  );
};

export default ForgotPinComponent;
