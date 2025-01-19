import{Link} from 'react-router-dom';
import { useWisdomContext } from '../../context/UseWisdomContext';
import { MdOutlineColorLens } from "react-icons/md";


const NavBar = () => {
    const {theme, setTheme} = useWisdomContext();

    return (
        <nav className="flex flex-row justify-between items-center p-6 px-[5%] bg-white sticky top-0 z-10 ">

                <Link to="/"  className="text-2xl font-bold">WISDOM<span className={`${ (theme==="purpul") ? "text-purpul" :"text-blue"}`} > PEAK</span></Link>

                <div className='flex flex-row items-center'>
                        <button onClick={()=>setTheme(theme==="purpul" ? "blue":"purpul")} className='p-2 mx-5'>
                            {
                                <MdOutlineColorLens size={25} className={`${theme==="purpul"? "text-purpul":"text-blue" }`} />
                            }


                        </button>
                        <button className={`${theme==="purpul"? "bg-purpul":"bg-blue" } px-4 py-2 font-medium text-white rounded-lg`}>
                            Get Started
                        </button> 


                </div>
                   
        </nav>
    );
};

export default NavBar;