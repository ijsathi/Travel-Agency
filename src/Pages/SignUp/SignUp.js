import { useHistory, useLocation } from 'react-router';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import useAuth from '../../hooks/useAuth';

const SignUp = () => {
  const { contexts} = useAuth();
  const {singInUsingGoogle} = contexts;
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || '/home';

  const handleGoogleLogin = () =>{
    singInUsingGoogle()
    .then(result =>{
      history.push(redirect_uri);
      console.log(result);
  })
  .catch(error=>{
    console.log(error.message);
  })
  }
    return (
        <div>
          <Header></Header>
           <div style={{textAlign:'center', padding:'30px'}}>
            <button onClick={handleGoogleLogin} ><img style={{width:'20px',style:'none'}} src="https://cdn-icons-png.flaticon.com/512/281/281764.png" alt="" /> Google sign up</button>
          </div>
          <Footer></Footer>
        </div>
    );
};

export default SignUp;