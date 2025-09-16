import Footer from "@/components/Footer";

export default function MainLayout({children}){
    return (
        <main>
            <nav>Header Navbar</nav>
            {children}
            <Footer />
        </main>
    );
}