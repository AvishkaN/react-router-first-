import React from 'react';
import {useSelector,useDispatch} from 'react-redux'; // state(data)
import {authActions} from './../../store/index'; // actions


function Header() {
    const dispatch=useDispatch();
    const isAuthenticated=useSelector(state=>state.auth.isAuthenticated);
  
    const handleAuthLogin=()=>{
        console.log(`handlingAuth`);
        console.log(authActions);
       dispatch(authActions.login());
    };
  
    const handleAuthLogOut=()=>{
        console.log(`handlingAuth`);
        console.log(authActions);
       dispatch(authActions.logout());
    };


    return (
        <>
        {console.log(`header rendering`)}
        {/* {console.log(dispatch)} */}
        {console.log(isAuthenticated)}
            <ul>
                
                <li><button>Home</button></li>
                <li><button>Menu</button></li>
                {!isAuthenticated  && <li onClick={handleAuthLogin}><button>login</button></li>}
               {isAuthenticated && <li onClick={handleAuthLogOut}><button>log Out</button></li>}
            </ul>
        </>
    )
}

export default Header
