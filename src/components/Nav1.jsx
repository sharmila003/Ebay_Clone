
import { useState, useEffect } from "react";
import { IoMdNotifications } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';

function Nav1() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const navigate = useNavigate();

  // Check sign-in status on component mount
  useEffect(() => {
    const userSignedIn = localStorage.getItem('userSignedIn') === 'true';
    setIsSignedIn(userSignedIn);
  }, []);

  //correct my code, it is not clearing my local storage 
  const handleSignOut = () => {
    setIsSignedIn(false);
    localStorage.setItem('userSignedIn', 'false');
    localStorage.clear();
    navigate('/');
  };

  const handleSignIn = () => {
    setIsSignedIn(true);
    localStorage.setItem('userSignedIn', 'true');
  };

  return (
    <div className="flex justify-between items-center w-full p-2 px-4 bg-gray-50 text-gray-800 text-[13px]">
      <div className="flex space-x-8">
        {isSignedIn ? (
          <div>
            Hi!
            <span className="text-blue-600 cursor-pointer underline" onClick={handleSignOut}> Sign out</span>
          </div>
        ) : (
          <div>
            Hi!
            <Link to="/signin" className="text-blue-600 cursor-pointer underline" onClick={handleSignIn}> Sign in</Link> or
            <Link to="/register" className="text-blue-600 cursor-pointer underline"> register</Link>
          </div>
        )}
        <div className="cursor-pointer max-sm:hidden">Daily Deals</div>
        <div className="cursor-pointer max-sm:hidden">Help & Contact</div>
      </div>

      <div className="flex space-x-8">
        <div className="cursor-pointer max-sm:hidden">Sell</div>
        <div className="cursor-pointer flex gap-1 items-center max-sm:hidden"><p>Watchlist</p> <span><MdKeyboardArrowDown fontSize={20}/></span></div>
        <div className="cursor-pointer max-sm:hidden">MyEbay</div>
        <div className="cursor-pointer">
          <IoMdNotifications className="text-xl" />
        </div>
        <div>
          <Link to="/cart" className="cursor-pointer">
            <FaShoppingCart className="text-xl" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Nav1;
