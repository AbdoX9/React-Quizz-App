import styled from "styled-components";

export const Wrapper = styled.div`
${(props) => props.submit ? null :"margin: 35px auto;"}
    display: flex;
    justify-content: center;
    align-items: center;
a {
    text-decoration: none;
    color: rgb(245, 247, 251);
    background-color: var(--buttonColor);
    padding: 12px 30px;
    border-radius: 10px;

}
a:hover {
    background-color: #4d5b9ec2;
    transition: .3s;
}
`