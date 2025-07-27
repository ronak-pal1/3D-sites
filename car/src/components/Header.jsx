

const Header = () => {
    return (
        <header className="sticky top-0 left-0 w-full flex items-center justify-between px-20 py-5 border-b border-b-neutral-200 bg-white z-[60]">
            <h1 className="text-3xl font-semibold text-neutral-900">Carshow</h1>


            <div>
                <button className="bg-neutral-900 text-neutral-200 text-lg px-7 py-1 rounded-full">Contact now</button>
            </div>
        </header>
    )
}


export default Header;