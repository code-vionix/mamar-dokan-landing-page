import Footer from "@/components/Footer";
import { auth } from "@/auth";

export default async function HomePage(){
    const session = await auth();

    return (
        <main>
            <nav>Header Navbar</nav>
            <Footer />
        </main>
    );
}