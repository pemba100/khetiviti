import React from "react";

function Footer (){
    return (
        <footer className=" text-black text-center py-3">
            <p className="mb-0 fs-5">
            © {new Date().getFullYear()} Khetiviti. All rights reserved.
            </p>
        </footer>

    );
};

export default Footer;