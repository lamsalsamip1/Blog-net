function Header() {
    return (
        <div className="w-full mt-16">
            <h1 className="font-serif text-3xl">Welcome to my blog</h1>
            <p className="mt-4">This is a blog where I write about things that interest me. I hope you find something interesting here.</p>
            <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className='mt-8 rounded-lg h-40 w-full object-cover'
                alt="" />

        </div>
    );
}

export default Header;