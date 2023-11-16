import {React,useEffect} from 'react'
import Header from './Header'
import Section from './Section'
import {useNavigate} from 'react-router-dom';

const Home = () => {
  useEffect(() => {
    if(localStorage.getItem('token')){
      navigate('/WelcomePage')
    }
    // eslint-disable-next-line

},[]);
  const navigate = useNavigate();
  return (
    <>
    <Header/>
    <Section/>
    </>
  )
}

export default Home