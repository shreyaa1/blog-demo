import React from "react";
import GoogleLogin from "react-google-login";

export const GoogleBtn = () => {
  const responseGoogle = response => {
    console.log(response);
  };
  return (
    <GoogleLogin
      clientId="478222980258-8ge2gvidvu6udrfprua6ba490r3kpke9.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    >
      <span> Login with Google</span>
    </GoogleLogin>
  );
};
