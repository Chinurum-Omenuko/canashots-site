
export default function Navbar() {
    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid flex flex-row justify-between">
                <a href="/">Canashots</a>
                
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </nav>
    )
}