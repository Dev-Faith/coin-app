import Nav from "./Nav/Nav";
import Footer from "./Footer";

export default function Layout({children}) {
    return (
        <div>
            <Nav />
            {children}
            <Footer/>
        </div>
    )
}