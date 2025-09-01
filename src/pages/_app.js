import { useRouter } from "next/router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/styles/globals.css";

//  HIDE the Header, Footer (Public Layout)
const privateRoutes = ["/reports", "/admin"];

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isPrivateRoute = privateRoutes.some((route) =>
    router.pathname.startsWith(route)
  );

  const content = <Component {...pageProps} />;

  return (
    <>
      {!isPrivateRoute && <Header />}
      {isPrivateRoute ? (
        content
      ) : (
        <div className="frontend-body">{content}</div>
      )}
      {!isPrivateRoute && <Footer />}
    </>
  );
}
