import { SignedIn, SignedOut, RedirectToSignIn, ClerkProvider } from "@clerk/nextjs";
import { UserButton, SignIn } from "@clerk/nextjs";
import Layout from "../components/Layouts/default-layout";
import Footer from "../components/Footer/login-footer";
import Navigation from "../components/Navigation";
import Login from "../components/Login/index";

const LoginPage = () => {
  return (
    <>
    <Login />
    <Footer />
    </>
  );
};

export default LoginPage;