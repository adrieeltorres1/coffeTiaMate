const Header = () => {
    return (
        <>
            <header className="w-full h-[110px] bg-[#292625] text-[#F5E7DA] text-lg">
                <div className="w-full max-w-7xl mx-auto h-full flex items-center justify-between">
                    <div className="flex items-center gap-16">
                        <img src="/imgs/Logo_Horizontal_01.png" alt="Logo Tiamate" />
                        <a href="">Início</a>
                        <a href="/nossocafe">Nosso Café</a>
                        <a href="">Notícias</a>
                        <a href="">Contato</a>
                        <a href="">Cardápio</a>
                    </div>
                    <div>
                        <button className="bg-[#C7794A] h-12 w-56 rounded-md text-[#3B2416] text-lg font-semibold">Seja um Franqueado</button>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;