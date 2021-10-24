import styled from 'styled-components'

const Title = styled.h1`
    color: #2cbf7d;
`;

const SubTitle = styled.h2`
    color: #32a88f;
`;

const Header = ({title}) => (
    <div>
        <Title>{title}</Title>
        <SubTitle>Put your life in the hands<span>*</span> of a computer</SubTitle>
    </div>
);

export default Header;
