import PropTypes from "prop-types";

const TeamForm = ({ form }) => {
  return (
    <div className='grid-item double'>
      <h2 className='text-center'>Form</h2>
      <div className='form-item'>
        {form
          .split("")
          .slice(-5)
          .map((letter, index) => (
            <p className='lead mx-1' style={handleStyle(letter)} key={index}>
              {letter}
            </p>
          ))}
      </div>
    </div>
  );
};

TeamForm.propTypes = {
  form: PropTypes.string.isRequired,
};

const handleStyle = letter => {
  if (letter === "W") {
    return {
      color: "green",
    };
  } else if (letter === "D") {
    return {
      color: "white",
    };
  } else {
    return {
      color: "red",
    };
  }
};

export default TeamForm;
