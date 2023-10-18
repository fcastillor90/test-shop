import React from 'react'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Header from './Components/Header';
import CardProduct from './Components/CardProduct/index';

const Home = () => {
    return (
        <>
            {/*<!-- Navigation-->*/}
                <Navbar />
            {/* <!-- Header--> */}
                <Header />
            {/* <!-- Section--> */}
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        <div className="col mb-5">
                            <CardProduct />
                        </div>
                        <div className="col mb-5">
                        <CardProduct />
                        </div>
                        <div className="col mb-5">
                        <CardProduct />
                        </div>
                        <div className="col mb-5">
                        <CardProduct />
                        </div>
                        <div className="col mb-5">
                        <CardProduct />
                        </div>
                        <div className="col mb-5">
                        <CardProduct />
                        </div>
                        <div className="col mb-5">
                        <CardProduct />
                        </div>
                        <div className="col mb-5">
                        <CardProduct />
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Footer--> */}
                <Footer />
        </>
    )
}

export default Home;