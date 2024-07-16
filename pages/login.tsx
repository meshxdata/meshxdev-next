import { SignedIn, SignedOut, RedirectToSignIn, ClerkProvider } from "@clerk/nextjs";
import { UserButton, SignIn } from "@clerk/nextjs";
import Layout from "../components/Layouts/default-layout";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const LoginPage = () => {
  return (
    <Layout>
      <Navigation />
      <ClerkProvider>
      <main className="font-inter relative">
        <div className="max-w-7xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-6 lg:grid-cols-6 gap-4 p-4">
          <div className="p-4 lg:col-span-6 md:col-span-6">
            <div className="grid grid-cols-6 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-8">
              <div className="pt-4 lg:col-span-8 md:col-span-8 col-span-6">
                <div className="flex justify-items justify-center md:justify-center">
                  <a href="/">
                    <img src="/meshx_logo.svg" alt="Logo" className="w-48 h-8 md:w-40 md:h-7" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 lg:col-span-2 md:col-span-2 "></div>
          <div className="p-4 lg:col-span-4 md:col-span-4 text-white/40 font-inter leading-10">
            <SignedOut>
              <SignIn routing="hash" />
            </SignedOut>
          </div>
          <div className="col-span-1 sm:col-span-6 lg:col-span-6 md:col-span-6 lg:mt-20"></div>
        </div>
      </main>
      </ClerkProvider>
      <Footer />
    </Layout>
  );
};

export default LoginPage;