import React from "react";
import Aside from "./aside";
import Content from "./content";
import Footer from "./footer";
import Header from "./header";
import Layout from "./layout";

const LE=()=>{
    return (
        <div>
            <Layout>
            <Aside />
            <Header />
            <Content />
            <Footer />
            </Layout>
        </div>
    )
}

export default LE