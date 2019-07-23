import React, { useRef } from "react";
import {
  IdentityContextProvider,
  useIdentityContext
} from "react-netlify-identity";
import "./App.css";

const Auth = () => {
  const formRef = useRef();
  const { signupUser } = useIdentityContext();
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column"
      }}
      ref={formRef}
      onSubmit={e => {
        e.preventDefault();
        const email = formRef.current.email.value;
        const password = formRef.current.password.value;

        signupUser(email, password).then(res => console.log(res));
      }}
    >
      <label>
        Email:
        <input type="email" name="email" />
      </label>
      <label>
        Password:
        <input type="password" name="password" />
      </label>
      <input type="submit" value="Sign Up" />
    </form>
  );
};

function App() {
  return (
    <IdentityContextProvider url="https://react-netlify-identity-signup-webhook-error.netlify.com">
      <Auth />
    </IdentityContextProvider>
  );
}

export default App;
