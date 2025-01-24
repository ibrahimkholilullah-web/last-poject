import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";

const Navber =async () => {
  const {getUser} = await getKindeServerSession()
  const user  = await getUser()
  console.log(user)
    return (
        <div className='container mx-auto flex justify-between items-stretch'>
          <div>Home</div>
          <div>
          <LoginLink>Sign in</LoginLink>
          <RegisterLink>Sign up</RegisterLink>
          </div>
        </div>
    );
};

export default Navber;