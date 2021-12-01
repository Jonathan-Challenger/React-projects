import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className='socials'>
        <a href='https://github.com/Jonathan-Challenger' target='_blank'>
          <i className='fab fa-github fa-2x'></i>
        </a>
        <a
          href='https://www.linkedin.com/in/jonathan-challenger-448a701b3/'
          target='_blank'
        >
          <i class='fab fa-linkedin fa-2x'></i>
        </a>
        <a href='https://www.jonathan-challenger.com/' target='_blank'>
          <i class='fas fa-globe fa-2x'></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
