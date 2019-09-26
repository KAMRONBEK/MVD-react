import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

let NotFoundPage = () => {
    return (
        <div>
            <Header />
            <div style={{ height: 300 }}><h1 style={{ textAlign: 'center', padding: 40 }}>Page is not found 404 :(</h1></div>
            <Footer />
        </div>
    )
}

export default NotFoundPage;