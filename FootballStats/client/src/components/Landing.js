import logo from "../img/logo.png";

const Landing = () => {
  return (
    <div id='landing-cont'>
      <h1 className='text-center heading py-5 text-white'>
        Premier League Statistics
      </h1>
      <img src={logo} alt='Premier League' />
    </div>
  );
};

export default Landing;
