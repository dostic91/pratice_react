import React from "react";
import Navbar from "./components/Navbar";
import Background from "./components/Background";
import Testimonials from "./components/Testimonials";
import Demo from "./components/Demo";
import Footer from "./components/Footer";

const App = () => {
    return (
        <div>
        <Navbar />
        <Background />
        <Testimonials />
        <Demo />
        <Footer />
    </div>
    )
}

export default App;