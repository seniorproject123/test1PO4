import styled from 'styled-components'
import { default as HeroImage, default as HeroImageMobile, default as HeroImageTablet } from './images/home/guesswhat.jpg'
import './index.css'
// import HeroImageMobile2x from './images/home/guesswhat.jpg'
import Coach from './components/Coach/coach.js'
import Features from './components/Features/features.js'
import Footer from './components/Footer/footer.js'
import Prestation from './components/Prestation/prestation.js'
import Sejour from './components/Sejour/sejour.js'
import Service from './components/Service/service.js'
import Solution from './components/Solution/solution.js'
import logo from './images/logo.png'

const Body = styled.div`
  margin: 0;
  box-sizing: border-box;
  padding: 0px 10vw;
  padding-top: 10vh;
  padding-bottom: 10vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  font-family: 'Spartan', sans-serif;
  min-width: 100%;
  min-height: 100vh;
  background-image: url(${HeroImage});
  background-size: cover;
  overflow-x: hidden;

  
  @media (max-width: 1430px) {
    padding: 0px 0px;
    gap: 3rem;
    justify-content: center;
    align-items: center;
    padding-bottom: 4rem;
  }
  @media(max-width: 1330px){
    background-image: url(${HeroImageTablet});
  }
  @media(max-width: 590px){
    background-image: url(${HeroImageMobile});
  }

  .heading_container{
    width: 600px;
    
    @media (max-width: 1430px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.3rem;
  }


  }

`
const Logo = styled.img`
  width: 100px;
  height: 100%;

  @media(max-width: 1330px){
    margin-top: 30rem;
  }
  @media(max-width: 950px){
    margin-top: 20rem;
  }
  @media(max-width: 500px){
    margin-top: 12rem;
  }
`
const Heading = styled.h1`
  color: white;
  font-size: 64px;
  font-weight: 300;

  @media (max-width: 1430px) {
    font-size: 32px;
    width: 300px;
    line-height: 45px;
    text-align: center;
    margin: auto;

  }
`
const Info = styled.p`
  color: white;
  font-size: 18px;
  font-weight: 400;
  line-height: 35px;
  margin-top: -10px;
  @media (max-width: 1430px) {
      font-size: 1rem;
      width: 80%;
      margin: auto;
      text-align: center;
      line-height: 30px;
  }
`
const Button = styled.button`
  color: white;
  background-color: transparent;
  padding: 1.7rem 4rem;
  font-family: 'Spartan', sans-serif;
  font-size: 14px;
  letter-spacing: 1px;
  font-weight: 400;
  border: 1px solid white;
  text-transform: uppercase;
  margin-top: 1rem;
  transition: all 0.4s;

  &:hover{
      background-color: white;
      color: black;
  }

  @media (max-width: 1430px) {
    margin: auto;
    width: 250px;
    padding: 1.5rem 3.6rem;
  }
`

function App() {
  return (
    <div>
        <Body>
          <Logo src={logo}/>
          <div className="heading_container">
          <Info>BOOSTSENIORS - SERVICES Premium</Info>
          <Heading>Facilitateur de la vie des seniors et de leurs proches</Heading>
          <Button>En savoir plus</Button>
          </div>
        </Body>
        <Service></Service>
        <Coach></Coach>
        <Features></Features>
        <Solution></Solution>
        <Prestation></Prestation>
        <Sejour></Sejour>
        <Footer></Footer>
    </div>
  );
}

export default App;
