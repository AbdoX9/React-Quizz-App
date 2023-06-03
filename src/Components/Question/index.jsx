import PropTypes from "prop-types"
import { Wrapper } from "./Question.Style"

export function Question({question}) {
 return <Wrapper>{question}</Wrapper>
}

Question.propTypes = {
    question: PropTypes.string,
}