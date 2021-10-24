import Header from "./Header";
import Footer from "./Footer";
import styled from 'styled-components';

const Wrapper = styled.div`
    text-align: center;
    background-color: #282c34;
    color: #fff;
`
const Layout = ({children}) => (
    <Wrapper>
        <Header />
            {children}
        <Footer />
    </Wrapper>
);

export default Layout;