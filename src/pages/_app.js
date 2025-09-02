// import { useRouter } from "next/router";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import "@/styles/globals.css";

// const privateRoutes = ["/reports", "/admin"];

// export default function App({ Component, pageProps }) {
//   const router = useRouter();

//   const isPrivateRoute = privateRoutes.some((route) =>
//     router.pathname.startsWith(route)
//   );

//   return (
//     <>
//       {!isPrivateRoute && <Header />}
//       <Component {...pageProps} />
//       {!isPrivateRoute && <Footer />}
//     </>
//   );
// }




import { useRouter } from "next/router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/styles/globals.css";

const privateRoutes = ["/reports", "/admin"];

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isPrivateRoute = privateRoutes.some((route) =>
    router.pathname.startsWith(route)
  );

  return (
    <>
      {isPrivateRoute ? (
        <Component {...pageProps} />
      ) : (
        <div className="frontend-body">
          <Header />
          <Component {...pageProps} />
          <Footer />
        </div>
      )}
    </>
  );
}
