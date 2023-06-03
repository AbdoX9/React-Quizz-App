import styled from "styled-components";

export const Answ = styled.div`
margin-top: 10px;
display: inline;
button {
    margin-right: 10px;
    border: ${(props)=> props.final ==="none" ? "1px solid #DBDEF0" : "none"};
    padding: 3px 6px;
    border-radius: 5px;
    cursor: pointer;
    background-color: ${(props) =>
         props.final === "none" ? (props.isSelected ? "#D6DBF5" :"transparent") :
        props.final === "correct" ? "#94D7A2" :
        props.final === "incorrect" ? "#F8BCBC" : null
}
}
button:hover {
    background-color: ${(props)=> props.final ==="none" ? "#D6DBF5" : null};
    color: ${ (props) => props.final === "none" ? "#293264" : null};
    transition: .3s;
}
`