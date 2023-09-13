import profile from '../../assets/profile.png';

const Header = () => {
    return (
        <header className='flex justify-between items-center p-4 my-4 mx-6 border-b-4'>
            <h1 className='text-6xl font-bold'>Vite + React</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;