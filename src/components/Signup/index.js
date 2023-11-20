// import Popup from 'reactjs-popup'
// import React, { useState } from 'react'
import {FcGoogle} from 'react-icons/fc' 
import 'reactjs-popup/dist/index.css'
import './index.css'


const renderDesktopView = () => {
    const onSignUp = (event) => {
        event.preventDefault()
    }
    return (
        <div className='desktop-bg-container'>
        <div className='popup-desktop-view'>
            <div className='form-google-container-desktop-view'>
              <div className='form-container'>
                <p className='signup-des'> 
                    <span className='sign-up'> Sign Up </span>get your dream job & excel in career
                </p>
                <form onSubmit={onSignUp} className='sign-up-form'>
                    <div className='inputs-container'>
                        <div className='input-container'>
                            <label className='label' htmlFor='name'>Full Name</label>
                            <input className='input' type='text' id='name' placeholder='  What is your name?' />
                        </div>

                        <div className='input-container'>
                            <label className='label' htmlFor='email'>Email ID</label>
                            <div className='email-container'>
                                <input className='input' type='text' id='email' placeholder='  Enter your Email ID' />
                                <p className='tagline'>We'll send you job notifications</p>
                            </div>
                        </div>

                        <div className='input-container'>
                            <label className='label' htmlFor='password'>Password</label>
                            <div className='password-container'>
                            <input className='input' type='text' id='password' placeholder='  Create your password here' />
                            <p className='tagline'>Minimum 6 characters required</p>
                            </div>
                        </div>

                        <div className='input-container'>
                            <label className='label' htmlFor='mobile-no'>Mobile No</label>
                            <input className='input' type='text' id='mobile-no' placeholder='+91 Mobile number' />
                        </div>


                        <p className='t-and-c'>
                            By Clicking Sign Up, you agree to  the  
                            <a href='https://www.writerbay.com/apply.html'>
                                Terms and Conditions & Privacy Policy
                            </a> of Karyakartha 
                        </p>

                        <button type='submit' className='sign-up-button'>Sign Up</button>

                    </div>
                </form>
                </div>
                <div className='desktop-line-google-container'>

                    <div className='desktop-line-container'>                       
                        <div className='v-line'></div>
                        <p className='or'>Or</p>
                        <div className='v-line'></div>
                    </div>

                    <div className='continue-with-container'>
                        <p className='continue-with'>Continue with</p>
                        <div>
                            <button className='desktop-google-button'>
                            <div className='icon-container'>
                                <FcGoogle className='FcGoogle'/>
                                <a href="https://www.writerbay.com/apply.html" className='google-anchor'> Google </a> 
                             </div>    
                            </button>
                        </div>
                    </div>
                </div>   
            </div>
        </div>
        </div>
    )
}

const renderMobileView = () => {
    const onSignUp = (event) => {
        event.preventDefault()
    }
    return (
        <div className='mobile-bg-container'>
        <div className='popup-mobile-view'>
            <div className='form-google-container-mobile-view'>
                <div className='mobile-form-container'>
            <h1 className='mobile-view-heading'>Create Account</h1>
                <form onSubmit={onSignUp} className='m-sign-up-form'>
                    <div className='m-inputs-container'>
                    <div className='m-input-container'>
                        <label className='m-label' htmlFor='m-name'>Full Name</label>
                        <input className='m-input' type='text' id='m-name' placeholder='Enter your name' />
                    </div>
                    <div className='m-input-container'>
                        <label className='m-label' htmlFor='m-email'>Email ID</label>
                        <input className='m-input' type='text' id='m-email' placeholder='Enter your mail..' />   
                    </div>
                    <div className='m-input-container'>
                        <label className='m-label' htmlFor='m-password'>Password</label>     
                        <input className='m-input' type='text' id='m-password' placeholder='Enter password' />  
                    </div>
                    <div className='m-input-container'>
                        <label htmlFor='mobile-no' className='m-label'>Mobile Number</label>
                        <input className='m-input' type='text' id='mobile-no' placeholder='Mobile number' />
                    </div>
                    </div>
                    <button type='submit' className='btn m-sign-up-button'>Sign Up</button>
                </form>
                <div className='mobile-line-button-container'>
                    <div className='mobile-line-container'>
                        <div className='h-line' ></div>
                        <p className='or'> Or </p>
                        <div className='h-line' ></div>
                    </div>
                        <button className='m-g-btn m-google-button'>
                                <div className='icon-container'>
                                <FcGoogle className='m-FcGoogle' />
                                <a href="https://www.writerbay.com/apply.html" className='google-anchor'> Continue with Google </a>
                               </div>
                        </button>         
                </div>
                </div>
                
            </div>
        </div>
        </div>
    )
}


/* const SignUp = () => {    
    return(
        <Popup 
            trigger = {
                <button className='signup-button'>SignUp</button>
            }
            modal
            nested
            closeOnDocumentClick = {false}
           // position = 'bottom right'
            >
                {(close) => (
                    <div className='popup-overlay'>
                        <div className='popup-content'>
                            <div className='close-button-container'>
                                <button className='close-button' onClick={close}> &times; </button>
                            </div>
                            {renderDesktopView()}
                            {renderMobileView()}
                        </div>
                    </div>
                )}
        </Popup>
    )
} */


/*const SignUp = () =>{

    const [isPopupOpen, setIsPopup] = useState(true)

    const handleClosePopup=()=>{
        setIsPopup(false)
    }

    const onPopupOpen=()=>{
        setIsPopup(true)
    }

    return(
        <>
        {isPopupOpen&&
        <Popup
            open
            modal
            closeOnDocumentClick={false}
            closeOnEscape
            trigger = {
                <button onClick={onPopupOpen} className='signup-button'>SignUp</button>
            }
         >
            <div className='popup-overlay'>
                    <div className='popup-content'>
                            <div className='close-button-container'>
                                <button className='close-button' onClick={handleClosePopup}> &times; </button>
                            </div>
                            {renderDesktopView()}
                            {renderMobileView()}
                    </div>
            </div>

         </Popup>}
         </>
    )
} */

const SignUp=()=>(
    <>
    {renderDesktopView()}
    {renderMobileView()}
    </>
)

export default SignUp
