// import React from 'react';
// import { observer } from 'mobx-react';
// import UserStore from './stores/UserStore';
// import LoginForm from './LoginForm';
// import SubmitButton from './SubmitButton';
// import { Link } from 'react-router-dom';
// import './LoggedIn.css';

// class UserPage extends React.Component {

//     render() {
//         return (
//             <div className="app"
//             abc={console.log(`user page`)}
//             >
//                 <div className='container'>
//                     Welcome User {UserStore.email}

//                     <Link to='/records'>紀錄 My Discovery</Link>
//                     <Link to='/survey'>樹木調查 Tree Survey</Link>
//                     <Link to='/post'>Treestagram</Link>

//                     {/* <SubmitButton
//                         text={'Sign Out'}
//                         disabled={false}
//                         onClick={() => this.doLogout()}
//                     /> */}

//                 </div>
//             </div>
//         );
//     }
// }

// export default UserPage;


import React from 'react';
import { observer } from 'mobx-react';
import { useNavigate } from 'react-router-dom';
import UserStore from './stores/UserStore';
import LoginForm from './LoginForm';
import SubmitButton from './SubmitButton';
import { Link } from 'react-router-dom';
import './LoggedIn.css';


function UserPage() {
    // const history = useHistory();
    const navigate = useNavigate();
    async function doLogout(){
        
    
        try {
    
          let res = await fetch('http://localhost:3001/signout', {
            method: 'post',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          });
    
          let result = await res.json();
    
          if (result && result.success) {
            UserStore.isLoggedIn = false;
            UserStore.email = '';
          }
          navigate('/')
        }
    
        catch (e) {
          console.log(e);
          navigate('/')
        }
      }

    return (
        <>
            <div className="app">
                <div className='container'>
                    Welcome User
                    <Link to='/records'>紀錄 My Discovery</Link>
                    <Link to='/survey'>樹木調查 Tree Survey</Link>
                    <Link to='/post'>Treestagram</Link>

                    <SubmitButton
                        text={'Sign Out'}
                        disabled={false}
                        onClick={() => doLogout()}
                    />

                </div>
            </div>
        </>
    );
}

export default UserPage;