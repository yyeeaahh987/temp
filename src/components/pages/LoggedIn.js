import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import UserStore from './stores/UserStore';
import LoginForm from './LoginForm';
import SubmitButton from './SubmitButton';
import { Link } from 'react-router-dom';
import './LoggedIn.css';


function LoggedIn() {

  const [treeRecords, setTreeRecords] = useState([]);
  
  useEffect(()=>{
    onload()
  },[])

  useEffect(()=>{

  },[UserStore])
  async function onload(){
    console.log(`in logged in `,UserStore)
    try {

      let res = await fetch('http://localhost:3001/isLoggedIn', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      let result = await res.json();
      if (result && result.success) {
        UserStore.loading = false;
        UserStore.isLoggedIn = true;
        UserStore.email = result.email;
      }

      else {
        UserStore.loading = false;
        UserStore.isLoggedIn = false;
      }
    }

    catch (e) {
      UserStore.loading = false;
      UserStore.isLoggedIn = false;
    }
  }


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
    }

    catch (e) {
      console.log(e);
    }
  }
  
  return (
    <div className="app">
      <div className='container'>
        <LoginForm />
      </div>
    </div>
  );


    console.log(UserStore)
  if (UserStore.loading) {
    return (
      <div className="app">
        <div className='container'>
          Loading, please wait...
        </div>
      </div>
    );
  }

  else {
    if (UserStore.isLoggedIn) {
      return (
        <div className="app">
          <div className='container'>
            Welcome {UserStore.email}

            <Link to='/records'>紀錄 My Discovery</Link>
            <Link to='/survey'>樹木調查 Tree Survey</Link>
            <Link to='/post'>Treestagram</Link>

            <SubmitButton
              text={'Sign Out'}
              disabled={false}
              onClick={() => this.doLogout()}
            />

          </div>
        </div>
      );
    }

    return (
      <div className="app">
        <div className='container'>
          <LoginForm />
        </div>
      </div>
    );
  }
}

export default LoggedIn;

















// import React from 'react';
// import { observer } from 'mobx-react';
// import UserStore from './stores/UserStore';
// import LoginForm from './LoginForm';
// import SubmitButton from './SubmitButton';
// import { Link } from 'react-router-dom';
// import './LoggedIn.css';

// class LoggedIn extends React.Component {
  
//   async componentDidMount() {
//     console.log(`in logged in `,UserStore)
//     try {

//       let res = await fetch('http://localhost:3001/isLoggedIn', {
//         method: 'post',
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json'
//         }
//       });

//       let result = await res.json();

//       if (result && result.success) {
//         UserStore.loading = false;
//         UserStore.isLoggedIn = true;
//         UserStore.email = result.email;
//       }

//       else {
//         UserStore.loading = false;
//         UserStore.isLoggedIn = false;
//       }
//     }

//     catch (e) {
//       UserStore.loading = false;
//       UserStore.isLoggedIn = false;
//     }
//   }

//   async doLogout() {

//     try {

//       let res = await fetch('http://localhost:3001/signout', {
//         method: 'post',
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json'
//         }
//       });

//       let result = await res.json();

//       if (result && result.success) {
//         UserStore.isLoggedIn = false;
//         UserStore.email = '';
//       }
//     }

//     catch (e) {
//       console.log(e);
//     }
//   }

//   render() {

//     if (UserStore.loading) {
//       return (
//         <div className="app">
//           <div className='container'>
//             Loading, please wait...
//           </div>
//         </div>
//       );
//     }
  
//     else {
  
//       if (UserStore.isLoggedIn) {
//         return (
//           <div className="app">
//             <div className='container'>
//               Welcome {UserStore.email}
  
//               <Link to='/records'>紀錄 My Discovery</Link>
//               <Link to='/survey'>樹木調查 Tree Survey</Link>
//               <Link to='/post'>Treestagram</Link>
  
//               <SubmitButton
//                 text={'Sign Out'}
//                 disabled={false}
//                 onClick={() => this.doLogout()}
//               />
  
//             </div>
//           </div>
//         );
//       }
  
//       return (
//         <div className="app">
//           <div className='container'>
//             <LoginForm />
//           </div>
//         </div>
//       );
//     }
//   }
// }

// export default LoggedIn;
// // observer(LoggedIn);



















