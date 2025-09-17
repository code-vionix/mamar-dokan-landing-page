
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function MainLayout({children}){
    return (
        <>
            <Navbar/>
            <main className="flex-grow">{children}</main>
            <Footer />
        </>
    );
}