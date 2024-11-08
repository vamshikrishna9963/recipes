

import { createUserWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { auth, db } from "./firebase"
import { doc, getDoc, setDoc } from "firebase/firestore"
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';



const Register_screen=()=>{
    const [userName,setuserName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [userNameError,setuserNameError]=useState('')
    const [emailError,setEmailError]=useState('')
    const [passwordError,setPasswordError]=useState('')

    const submitedForm=async(e)=>{
      e.preventDefault()

        try{

          await createUserWithEmailAndPassword(auth,email,password);
          const user= auth.currentUser
          console.log(user);

          if(user){

            await setDoc(doc(db, 'Users', user.uid),{
              email:user.email,
              username:userName,
              password:password,
              photo:""
            })
          }
          
          console.log('user login');
          toast.success("successfully register",{
            position:"top-center"
          })

         
          
        }catch(error){
          console.error(error.message)
          toast.error(error.message,{
            position:'bottom-center'
          })
        }

      
     setuserName("")
     
  }

    const userNameHandler=(e)=>{
        const userEnter=e.target.value
        setuserName(userEnter)
        const error=userValidations(userEnter)

        if(error){
            setuserNameError(error)
        }
        else{
            setuserNameError("")
        }
    }

    const userValidations=(value)=>{
        let error=''
        
        if(!value){
            error='Please Enter Your Name'
        }
        else if(value.length < 6 || value.length > 20 ){
            error='User name must be less greater then 6 and less then 20 characters'
        }
        return error
    }

    const emailHandler=(e)=>{
        const userEnter=e.target.value
        setEmail(userEnter)
        const error=emailValidations(userEnter)
        if(error){
            setEmailError(error)
        }
        else{
            setEmailError('')
        }


    }

    const emailValidations=(value)=>{
        let error=''
        let email=/^(?=.*[a-z])(?=.*@gmail.com$)/
        if(!value){
            error="Please Enter your Email Id"
        }
        else if(!email.test(value)){
            error="Please Enter Valid Email Address"
        }

        return error
    }
    

    const passwordHandler=(e)=>{
        const userEnter=e.target.value
        setPassword(userEnter)
        const error=passwordValidations(userEnter)
        if(error){
            setPasswordError(error)
        }
        else{
            setPasswordError('')
        }

    }

    const passwordValidations=(value)=>{
        let error=""
        let passwords=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#*%]).{6,12}$/
        if(!value){
            error="Please Enter Your password"
        }
        else if(!passwords.test(value)){
            error=<>
            <li>The password must be greater then 6 and less then 12 character</li>
            <li>The password must be one small letter</li>
            <li>The password must be one capital letter</li>
            <li>The password must be one special character</li>
            </>
            
        }
        return error
    }

    

   const gotoLogin=()=>{
    window.location='/'
   }

    return(
        <>
       <center><h1 style={{color:"orange"}}>Register Your New Account </h1></center>
        <ToastContainer/>
        <>

  {/* Login 8 - Bootstrap Brain Component */}
  <section className="bg-light p-3 p-md-4 p-xl-5">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-xxl-11">
          <div className="card border-light-subtle shadow-sm">
            <div className="row g-0">
              <div className="col-12 col-md-6">
                <img
                  className="img-fluid rounded-start w-100 h-100 object-fit-cover"
                  loading="lazy"
                  src="https://img.pikbest.com/wp/202351/chef-cook-virtual-online-cooking-courses-and-restaurant-delivery-illustrated-in-3d-cartoon-style_9788098.jpg!sw800"
                  alt="Welcome back you've been missed!"
                />
              </div>
              <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                <div className="col-12 col-lg-11 col-xl-10">
                  <div className="card-body p-3 p-md-4 p-xl-5">
                    <div className="row">
                      <div className="col-12">
                        <div className="mb-5">
                          <div className="text-center mb-4">
                           
                          </div>
                          <h4 className="text-center">
                            Welcome back you've been missed!
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                       
                       
                      </div>
                    </div>
                    <form onSubmit={submitedForm}>
                      <div className="row gy-3 overflow-hidden">
                      <div className="col-12">
                          <div className="form-floating mb-3">
                            <input
                              type="text"
                              className="form-control"
                              name="text"
                              id="text"
                              placeholder="name@example.com"
                              value={userName}
                              onChange={userNameHandler}
                            />
                            <label htmlFor="text" className="form-label">
                              UserName
                            </label>
                            {
                                userNameError ? <span style={{color:'red'}}>{userNameError}</span>:""
                            }
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-floating mb-3">
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              id="email"
                              placeholder="name@example.com"
                              value={email}
                              onChange={emailHandler}
                            />
                            <label htmlFor="email" className="form-label">
                              Email
                            </label>
                            {
                                emailError ? <span style={{color:'red'}}>{emailError}</span>:""
                            }
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-floating mb-3">
                            <input
                              type="password"
                              className="form-control"
                              name="password"
                              id="password"
                              defaultValue=""
                              placeholder="Password"
                              value={password}
                              onChange={passwordHandler}
                            />
                            <label htmlFor="password" className="form-label">
                              Password
                            </label>
                            {
                                passwordError ? <span style={{color:"red"}}>{passwordError}</span>:""
                            }
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              name="remember_me"
                              id="remember_me"
                            />
                            <label
                              className="form-check-label text-secondary"
                              htmlFor="remember_me"
                            >
                              Keep me logged in
                            </label>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="d-grid">
                            <button
                              className="btn btn-dark btn-lg"
                              type="submit"
                            >
                              Log in now
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                    <div className="row">
                      <div className="col-12">
                        <div className="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-center mt-5">
                          {/* <Link to={"login"}>Create New Account</Link> */}
                          {/* {
                            window.location.href='/login'
                          } */}
                          <div onClick={gotoLogin} style={{cursor:"pointer"}}>Goto Login Page</div>
                         
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

        </>
   

)
}

export default Register_screen