import React from "react";
import { FiTwitter, FiGithub, FiLinkedin} from "react-icons/fi";

const Social = () => {
    return (
        <div className="home__social">
            <a href="https://x.com/FabriceIR250" className="home__social-icon" target="_blank">
                <FiTwitter />
            </a>
            <a href="https://github.com/fabriceIR250" className="home__social-icon" target="_blank">
                <FiGithub />
            </a>
            <a href="" className="home__social-icon" target="_blank">
                <FiLinkedin />
            </a>
        </div> 
    ); 
}

export default Social;