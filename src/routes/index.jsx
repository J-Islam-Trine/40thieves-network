import { Link } from 'react-router-dom'
import CaveLogo from '../assets/cave.png'

export default function Index()
{

    return(
        <div className='text-center mx-16'>
        <p className="text-3xl font-bold m-4">Caves for everyone.</p>
        <p>connect with other thieves from all over the world, find the best caves to stay in, and share tips and tricks of the trade.</p>
        <button className="btn btn-solid-primary font-bold border-2 border-white-800 mt-4"><Link to="/sign-up">Sign up today, and start planning your next heist!</Link></button>
        </div>
    )
}