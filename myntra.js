import React from "react";
import ReactDOM from "react-dom/client";
import allcards from "./components/card";
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";

const website = (
    <>
        <Header/>
        <Main/>
        {allcards}
        <Footer/>
    </>
)


const reactroot = ReactDOM.createRoot(document.getElementById("root"));
reactroot.render(website);

