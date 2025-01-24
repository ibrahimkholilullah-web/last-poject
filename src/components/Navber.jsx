import React from 'react';
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

const Navber =async () => {
  const { getUser } = getKindeServerSession()
  const user = await getUser()
   return (
    <div className='bg-slate-800'>
      <div className="navbar container mx-auto  text-white py-4">
        <div className="navbar-start">
         
          <a href='/' className="btn btn-ghost text-xl">Home</a>
          <a href='/profile' className="btn btn-ghost text-xl">Profile</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {/* Add horizontal menu items here */}
          </ul>
        </div>
        <div className="navbar-end">
         
            
            {
              user ? <>
             <div className='flex items-center gap-4'>
             
              
              <LogoutLink  className='btn border-2 bg-amber-300 px-8'>Log out</LogoutLink></div> 
              </>:<LoginLink className='btn border-2 bg-amber-300 px-8'>Sign in</LoginLink>
            }
        </div>
      </div>
    </div>
  );
};

export default Navber;
