import React, { useState } from "react";
import { validateEmail } from "../utils/email-validator";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function SignUp() {
  const [signUpState, setSignUpState] = useState(false);
  const emailField = React.useRef();
  const passwordField = React.useRef();
  const auth = getAuth();

  function handleRegistration(event)
  {
    event.preventDefault();
    const email = emailField.current.value;
    const password = passwordField.current.value;
    // const response = await validateEmail(email);

    // if(response.is_smtp_valid.value)
    // {
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
            setSignUpState(true);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
    
    // }


      
  }
  return (
    <div >
      {
        signUpState ?
        <div className="flex flex-col items-center justify-center mt-32">
          <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCI+CjxsaW5lYXJHcmFkaWVudCBpZD0iSU1vSDdncHU1dW41RHgydklEMzlSYV9wSVBsOHRxaDNpZ05fZ3IxIiB4MT0iOS44NTgiIHgyPSIzOC4xNDIiIHkxPSI5Ljg1OCIgeTI9IjM4LjE0MiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzlkZmZjZSI+PC9zdG9wPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzUwZDE4ZCI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggZmlsbD0idXJsKCNJTW9IN2dwdTV1bjVEeDJ2SUQzOVJhX3BJUGw4dHFoM2lnTl9ncjEpIiBkPSJNNDQsMjRjMCwxMS4wNDUtOC45NTUsMjAtMjAsMjBTNCwzNS4wNDUsNCwyNFMxMi45NTUsNCwyNCw0UzQ0LDEyLjk1NSw0NCwyNHoiPjwvcGF0aD48bGluZWFyR3JhZGllbnQgaWQ9IklNb0g3Z3B1NXVuNUR4MnZJRDM5UmJfcElQbDh0cWgzaWdOX2dyMiIgeDE9IjEzIiB4Mj0iMzYiIHkxPSIyNC43OTMiIHkyPSIyNC43OTMiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9Ii44MjQiIHN0b3AtY29sb3I9IiMxMzVkMzYiPjwvc3RvcD48c3RvcCBvZmZzZXQ9Ii45MzEiIHN0b3AtY29sb3I9IiMxMjU5MzMiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMxMTUyMmYiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxwYXRoIGZpbGw9InVybCgjSU1vSDdncHU1dW41RHgydklEMzlSYl9wSVBsOHRxaDNpZ05fZ3IyKSIgZD0iTTIxLjI5MywzMi43MDdsLTgtOGMtMC4zOTEtMC4zOTEtMC4zOTEtMS4wMjQsMC0xLjQxNGwxLjQxNC0xLjQxNAljMC4zOTEtMC4zOTEsMS4wMjQtMC4zOTEsMS40MTQsMEwyMiwyNy43NThsMTAuODc5LTEwLjg3OWMwLjM5MS0wLjM5MSwxLjAyNC0wLjM5MSwxLjQxNCwwbDEuNDE0LDEuNDE0CWMwLjM5MSwwLjM5MSwwLjM5MSwxLjAyNCwwLDEuNDE0bC0xMywxM0MyMi4zMTcsMzMuMDk4LDIxLjY4MywzMy4wOTgsMjEuMjkzLDMyLjcwN3oiPjwvcGF0aD4KPC9zdmc+"/>
            <p>You have successfully sign up.</p>
        </div> 
        :
        <div className="grid grid-cols-2 items-center gap-4">
                  <div>
        <form onSubmit={handleRegistration} className="flex flex-col rounded-xl border border-border sm:p-8">
          <div className="form-group">
            <div className="form-field">
              <label className="form-label">Email address</label>

              <input ref={emailField}
                placeholder="Type here"
                type="email"
                className="input max-w-full"
              />
              
            </div>
            <div className="form-field">
              <label className="form-label">
                <span>Password</span>
              </label>
              <div className="form-control">
                <input ref={passwordField}
                  placeholder="Type here"
                  type="password"
                  className="input max-w-full"
                />
              </div>
            </div>
            <div className="form-field pt-5">
              <div className="form-control justify-between">
                <button type="submit" className="btn btn-primary w-full">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="flex flex-col gap-2">
            <p>Why join Us</p>

<div className="card max-w-full shadow-none border-2 bg-sky-400 text-white">
	<div className="card-body p-4">
        <h3 className=" font-bold">Find the perfect cave</h3>
        
    </div>
</div>

<div className="card max-w-full shadow-none border-2 bg-fuchsia-400 text-white">
	<div className="card-body p-4">
        <h3 className=" font-bold">Get tips and advices from veterans.</h3>
        
    </div>
</div>

<div className="card max-w-full shadow-none border-2 bg-red-400 text-white">
	<div className="card-body p-4">
        <h3 className=" font-bold">Connect with other thieves.</h3>
        
    </div>
</div>




      </div>
        </div>

      }

    </div>
  );
}
