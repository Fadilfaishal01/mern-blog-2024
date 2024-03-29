import { Button, Navbar, TextInput } from 'flowbite-react'
import { Link, useLocation } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaMoon } from 'react-icons/fa'
import { NAVBAR_LINK } from '../../constant'

export default function Header() {
    const path = useLocation().pathname;

    return (
        <Navbar className='border-b-2'>
            <Link className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white' to={'/'}>
                <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
                    Continuar
                </span> Blog
            </Link>
            <form>
                <TextInput 
                    type='text'
                    placeholder='Search...'
                    rightIcon={AiOutlineSearch}
                    className='hidden lg:inline'
                />
            </form>
            <Button className='w-12 h-10 lg:hidden' color='gray' pill>
                <AiOutlineSearch />
            </Button>
            <div className='flex gap-2 md:order-2'>
                <Button className='w-12 h-10 hidden sm:inline' color='gray' pill>
                    <FaMoon />
                </Button>
                <Link to={'/sign-in'}>
                    <Button gradientDuoTone={'purpleToBlue'} outline>
                        Sign In
                    </Button>
                </Link>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                {NAVBAR_LINK.map((vData, kData) => {
                    return (
                        <Navbar.Link key={kData + vData.name} active={path === vData.link} as={'div'}>
                            <Link to={`${vData.link}`}>
                                {vData.name}
                            </Link>
                        </Navbar.Link>
                    )
                })}
            </Navbar.Collapse>
        </Navbar>
    )
}
