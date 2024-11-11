import React from 'react';
import Header from './Header'; // Import Header
import Footer from './Footer'; // Assume you have a Footer component
import HERO from './Hero'; // Assume you have a Footer component


const Home = () => {
    return (
        <div>
            <Header /> {/* Include the Header here */}
            <main>
                <section>
                    {/* Your featured destinations content here */}
                    <HERO/>
                    <div>
                        {/* Your destinations cards or content */}
                    </div>
                </section>
            </main>
            <Footer /> {/* Footer component */}
        </div>
    );
};

export default Home;