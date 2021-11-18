import logo from "../img/logo.png";

const Landing = () => {
  return (
    <div className='container-inner'>
      <div className='landing-cont'>
        <h1 className='text-center heading py-5 text-white'>
          Premier League Statistics
        </h1>
        <img id='landing-logo' src={logo} alt='Premier League' />
      </div>
    </div>
  );
};

export default Landing;
