import Footer from '@/components/Share/Footer';
import Navbar from '@/components/Share/Navbar';


import React from 'react';

const layout = ({children}) => {
    return (
        <div>
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
        </div>
    );
};

export default layout;