import './signin.css'
import '../global.css'
import 'bootstrap/dist/css/bootstrap.min.css'



const SignInComponent = () =>{
    return(
        
      <>
    <img alt = "logo" className="logoCSS" src="https://icon-library.com/images/m-icon/m-icon-7.jpg"/>

      <form className="formContainer">
        <p className="signinText">Sign In to your account here..</p>

        <label className="labelcss" for="adhaarInput">Enter aadhaar/</label>
        <input type ="number" id="adhaarInput" placeholder="Aadhaar/ Mobile Number*" className="inputcss" />

        <label className="labelcss" for="adhaarInput">Enter 6 digit security PIN*</label>
        <input type ="password" id="adhaarInput" maxlength='6' placeholder="Enter your PIN" className="inputcss" />
        <button className="formText">Forgot security PIN?</button>
        <button type="submit" className='buttonCss'>Sign In</button>
        <p className="signUpText">Do not have an account? <a href='javascript:void(0);' className="signUpcss">Sign Up</a></p>
        <p className="tctext">By signing in, you are agreeing with our<a className="signUpcss" href="javascript:void(0);"> Terms & Conditions</a></p>
        
      </form>

     </>
    )
}

export default SignInComponent