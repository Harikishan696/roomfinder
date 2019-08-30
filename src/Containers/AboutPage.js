import React, { Component } from 'react';
import Header from "../Components/Header";
import About from "../Components/About";
import Footer from "../Components/Footer";
class About extends Component {
    render() {
        return (
            <div>
                <Header/>
                <About/>
                <Footer/>
            </div>
        );
    }
}

export default AboutPage;