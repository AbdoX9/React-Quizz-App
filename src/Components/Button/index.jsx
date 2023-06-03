import { Wrapper } from "./Button.style";
import PropTypes from "prop-types"
import { Link } from "react-router-dom";

export function Button({text, pathing,handleClick , submit}) {
    return <Wrapper onClick={handleClick} submit={submit}>
        <Link to={pathing}>
        {text}
        </Link>
    </Wrapper>
}

Button.propTypes = {
    text: PropTypes.string,
    pathing: PropTypes.string,
    submit: PropTypes.bool,
    handleClick: PropTypes.func,
}