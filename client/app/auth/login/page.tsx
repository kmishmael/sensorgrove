import Head from "next/head";
import Link from "next/link";
import { LoginForm } from "@/components/loginform";
import { signIn } from "next-auth/react";

const Login = ({
  searchParams,
}: {
  searchParams: { error: string; callbackUrl: string };
}) => {
  const getLoginSuccessRedirectUrl = () => {
    if (
      searchParams.callbackUrl &&
      typeof searchParams.callbackUrl === "string"
    ) {
      return searchParams.callbackUrl;
    }
    return "/";
  };

  const handleGoogleLogin = async () => {
    await signIn("google-signin", {
      callbackUrl: getLoginSuccessRedirectUrl(),
      redirect: false,
    });
  };

  return (
    <div>
      <Head>
        <title>Login</title>
      </Head>
      <div>
        <div className="container-fluid mt-4">
          <div className="row d-flex justify-content-center">
            <div className="col-md-4">
              <div className="card p-5">
                <h6 className="text-center">Login</h6>
                {searchParams.error && (
                  <div className="alert alert-danger" role="alert">
                    {searchParams.error}
                  </div>
                )}
                <LoginForm callbackUrl={searchParams.callbackUrl} />
                <p className="text-center mt-2">Or</p>
                <>
                  {/*
                <button
                  className="btn btn-outline-primary"
                  onClick={handleGoogleLogin}
                >
                  <img
                    src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-32.png"
                    width="20px"
                    alt="google-icon"
                  />
                  Login with google
                </button>
                */}
                </>

                <hr />
                <p>
                  No account? Please <Link href="/auth/signup">Signup</Link>
                  here
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
