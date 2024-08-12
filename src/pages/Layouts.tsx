import styled from '@emotion/styled'
import { Outlet, Link } from "react-router-dom";

function Layouts() {
    return (
        <Container>
            <HeaderBox>
                <Header>
                    <Logo>Sues</Logo>
                    <Menu>
                        <HeaderText>
                            <Link to="/">Home</Link>
                        </HeaderText>
                        <HeaderText>
                            <Link to="/profile">Profile</Link>
                        </HeaderText>
                        <HeaderText>
                            <Link to="/about">About</Link>
                        </HeaderText>
                        <HeaderText>
                            <Link to="/activity">Activity</Link>
                        </HeaderText>

                    </Menu>
                </Header>
            </HeaderBox>

            <Outlet />
        </Container>
    )
}

const Container = styled.div`
`;

const HeaderBox = styled.div`
    background-color: rgba(255, 255, 255, 0.3);
    position: fixed;
    z-index: 3;
    width: 100%;
    left: 0;
    top: 0;
`;

const Header = styled.div`
    width: 1170px;
    height: 80px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Logo = styled.div`
        color: white;
        font-size: 40px;
`;

const Menu = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const HeaderText = styled.div`
    margin: 0 56px;
    a { 
      color: white;
    }

    &:hover {
        a{
          color: white;
          text-decoration: underline;
        }
    }
`;

export default Layouts;