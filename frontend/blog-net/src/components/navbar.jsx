function NavBar() {
    return (
        <div className="flex mt-6 ">
            <h3 className="font-serif text-2xl">Samip's Blog</h3>
            <nav className="flex-grow">
                <ul className="flex justify-end text-black gap-x-40">
                    <li className=""><a href="/">Home</a></li>
                    <li className=""><a href="/about">About</a></li>
                    <li className=""><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;