import Footer from "./Footer";
import NavBar from "./NavBar";

export default function Layout({children}) {
  return (
    <div className="max-w-5xl mx-auto p-8">
        <NavBar />
            {children}
        <Footer />
    </div>
  )
}
