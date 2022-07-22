import '../signInPage/signin.css'
import '../global.css'
import 'bootstrap/dist/css/bootstrap.min.css'



const Otppage = () =>{
    return(
        
      <>
    <img alt = "logo" className="logoCSS" src="https://icon-library.com/images/m-icon/m-icon-7.jpg"/>

      <form className="formContainer">
        <p className="signinText">OTP Verification</p>
        <p>Mitaan app has sent you an OTP to your <br/>
registered mobile (xxxxxx9999)</p>
<form className="otpForm" >  
    <input className="otpInputField" maxlength='1' type="text" id="digit-1" name="digit-1" data-next="digit-2" />  
    <input className="otpInputField" maxlength='1'   type="text" id="digit-2" name="digit-2" data-next="digit-3" data-previous="digit-1" />  
    <input className="otpInputField" maxlength='1'   type="text" id="digit-3" name="digit-3" data-next="digit-4" data-previous="digit-2" />  
    <input className="otpInputField" maxlength='1'   type="text" id="digit-4" name="digit-4" data-next="digit-5" data-previous="digit-3" />  
   </form>  

        <button className="formText">Resend OTP in 00 seconds</button>
        <button type="submit" className='buttonCss'>Verify OTP</button>
        <p className="signUpText otpText">Did not get the OTP?  <a href='javascript:void(0);' className="signUpcss"> Resend OTP</a></p>
        <p className="tctext">By signing in, you are agreeing with our<a className="signUpcss" href="javascript:void(0);"> Terms & Conditions</a></p>
        
      </form>

     </>
    )
}

export default Otppage