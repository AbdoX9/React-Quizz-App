import { Answ } from "./Choices.style"
import PropTypes from "prop-types"


export function Choices({answer, handleClick, isSelected, isOn, final}) {
    return <Answ onClick={handleClick} isSelected={isSelected} final={final}  >
        <button disabled={isOn}>

    {answer}
        </button>
</Answ>
}

Choices.propTypes = {
    answer: PropTypes.string,
    final: PropTypes.string,
    isSelected: PropTypes.bool,
    isOn: PropTypes.bool,
    handleClick: PropTypes.func,
}