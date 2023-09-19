import './Navbar.css';

function Navbar(){
    return(
        <div className="navbar">
            <div className="logo">
                <div className="wosist-name">
                    <p>WoSIST</p>
                </div>
                <div className="wosist-tagline">
                    <p>What Should I Study Today?</p>
                </div>
            </div>
            <div className="Login">
                <div><p>Login/Register</p></div>
            </div>
        </div>
    );
}

export default Navbar;