import "../signInPage/signin.css";
import "../global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AccountCreationPage.css";

const AccountCreationComponent = () => {
  return (
    <>
      <img
        alt="logo"
        className="logoCSS"
        src="https://icon-library.com/images/m-icon/m-icon-7.jpg"
      />

      <form className="formContainer">
        <p className="signinText">Create your account here..</p>
        <div className="inputsContainer">
          <div className="leftContainerInputs">
            <label className="labelcss" for="adhaarInput">
              Your Name
            </label>
            <input
              type="number"
              id="adhaarInput"
              placeholder="Full Name (As per Aadhaar)"
              className="inputcss"
            />
            <label className="labelcss" for="adhaarInput">
              Mobile Number
            </label>
            <input
              type="number"
              id="adhaarInput"
              placeholder="Enter mobile number (As per Aadhaar)"
              className="inputcss"
            />
            <label className="labelcss" for="adhaarInput">
              Aadhaar Number
            </label>
            <input
              type="number"
              id="adhaarInput"
              placeholder="Enter your Aadhaar"
              className="inputcss"
            />
          </div>

          <div className="rightContainerInputs">
            <label className="labelcss" for="adhaarInput">
              Date of birth
            </label>
            <input
              type="number"
              id="adhaarInput"
              placeholder="DD | MM | YYYY"
              className="inputcss"
            />
            <label className="labelcss" for="adhaarInput">
              Set 6 digit security PIN *
            </label>
            <input
              type="number"
              id="adhaarInput"
              placeholder="Enter your PIN"
              className="inputcss"
            />
            <label className="labelcss" for="adhaarInput">
              Email ID
            </label>
            <input
              type="number"
              id="adhaarInput"
              placeholder="Enter your valid email ID"
              className="inputcss"
            />
          </div>
        </div>

        <div className="radioContainer">
          <input
            className="radioButtonCss"
            type="radio"
            name="gender"
            value="male"
          />
          Male
          <input
            className="radioButtonCss"
            type="radio"
            name="gender"
            value="female"
          />{" "}
          Female
          <input
            className="radioButtonCss"
            type="radio"
            name="gender"
            value="other"
          />{" "}
          Other
        </div>
        <button type="submit" className="buttonCss">
          Proceed
        </button>
        <p className="signUpText">
          Already have an account?{" "}
          <a href="javascript:void(0);" className="signUpcss">
            Sign In
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

export default AccountCreationComponent;
