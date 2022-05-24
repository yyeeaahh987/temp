import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from './InputField';
import SubmitButton from './SubmitButton';
import UserStore from './stores/UserStore';
import Records from './Records'
import { KeyboardVoiceOutlined } from '@material-ui/icons';
// import history from '../../history';

const adminEmail =["iris.lam@example.com","jason.chau@example.com","kalvin.leung@example.com"]

function LoginForm() {
  const navigate = useNavigate();
  const [treeRecords, setTreeRecords] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);


  // function setInputValue(property, val) {
  //   val = val.trim();
  //   if (val.length > 60) {
  //     return;
  //   }
  //   this.setState({
  //     [property]: val
  //   })
  // }

  function resetForm() {
    setEmail("")
    setPassword("")
    setButtonDisabled(false)
    // this.setState({
    //   email: '',
    //   password: '',
    //   buttonDisabled: false
    // })
  }

  async function doLogin() {

    if (!email) {
      return;
    }
    if (!password) {
      return;
    }

    // this.setState({
    //   buttonDisabled: true
    // })
    setButtonDisabled(true)

    try {

      let res = await fetch('http://localhost:3001/signin', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password
        })
      });
      let result = await res.json();
      if (result && result.success) {
        UserStore.isLoggedIn = true;
        UserStore.email = result.email;
        if(adminEmail.indexOf(result.email)!==-1){
          // is admin
          navigate('/admin')
        }else{
          // not a admin
          navigate('/user')
        }
      }

      else if (result && result.success === false) {
        resetForm();
        alert(result.msg);
      }
    }

    catch (e) {
      console.log(e);
      resetForm();
    }

  }

  return (
    <>
      <div className="loginForm">

        Sign In
        <InputField
          type='text'
          placeholder='Email'
          // value={this.state.email ? this.state.email : ''}
          value={email ? email : ''}
          onChange={(val) => {
            setEmail(val)
          }
            // this.setInputValue('email', val)
          }
        />

        <InputField
          type='password'
          placeholder='Password'
          // value={this.state.password ? this.state.password : ''}
          // onChange={(val) => this.setInputValue('password', val)}
          value={password ? password : ''}
          onChange={(val) => {
            setPassword(val)
          }}
        />

        <SubmitButton
          text='Sign In'
          disabled={buttonDisabled}
          onClick={() => doLogin()}
        />

      </div>
    </>
  )
}

export default LoginForm;
















// import React from 'react';
// import {useNavigate} from 'react-router-dom';
// import InputField from './InputField';
// import SubmitButton from './SubmitButton';
// import UserStore from './stores/UserStore';
// import Records from './Records'
// // import history from '../../history';
// class LoginForm extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       email: '',
//       password: '',
//       buttonDisabled: false
//     }
//   }
//   componentDidMount() {
//     console.log(`in logged in `,UserStore)
//   }

//   setInputValue(property, val) {
//     val = val.trim();
//     if (val.length > 60) {
//       return;
//     }
//     this.setState({
//       [property]:val
//     })
//   }

//   resetForm() {
//     this.setState({
//       email: '',
//       password: '',
//       buttonDisabled: false
//     })
//   }

//   async doLogin() {

//     if (!this.state.email) {
//       return;
//     }
//     if (!this.state.password) {
//       return;
//     }

//     this.setState({
//       buttonDisabled: true
//     })

//     try {

//       // let res = await fetch('http://localhost:3001/signin', {
//       //   method: 'post',
//       //   headers: {
//       //     'Accept': 'application/json',
//       //     'Content-Type': 'application/json'
//       //   },
//       //   body: JSON.stringify({
//       //     email: this.state.email,
//       //     password: this.state.password
//       //   })
//       // });
//       // let result = await res.json();
//       let result ={
//         success:true,
//         email:"abc@abc.com",
//         isUser:true
//       }
//       // history.push("/user")
//       // if (result && result.success) {
//       //   UserStore.isLoggedIn = true;
//       //   UserStore.email = result.email;
//       // }

//       // else if (result && result.success === false) {
//       //   this.resetForm();
//       //   alert(result.msg);
//       // }
//     }

//     catch(e) {
//       console.log(e);
//       this.resetForm();
//     }

//   }

//   render() {
//     return (
//       <div className="loginForm">

//         Sign In
//         <InputField
//           type='text'
//           placeholder='Email'
//           value={this.state.email ? this.state.email : ''}
//           onChange={ (val) => this.setInputValue('email',val) }
//         />

//         <InputField
//           type='password'
//           placeholder='Password'
//           value={this.state.password ? this.state.password : ''}
//           onChange={ (val) => this.setInputValue('password',val) }
//         />

//       <SubmitButton
//         text='Sign In'
//         disabled={this.state.buttonDisabled}
//         onClick={ () => this.doLogin() }
//       />

//       </div>
//     );
//   }
// }

// export default LoginForm;