import styled from "@emotion/styled";

function Home() {
    return <>
    <BackgroundImage>
        <Container>
            <SpaceMan src="/img/space_man.svg" />
            <Rocket src="/img/rocket.svg" />
            <Title>
                <SmallTitle>My Dream is to be an</SmallTitle>
                <MainTitle>Astronaut</MainTitle>
            </Title>
        </Container>
    </BackgroundImage>

    <Page2>
        <Page2Container>
            <Armstrong src="/img/profile.png" />
            <Info>
         <InfoTitle>Name</InfoTitle>
                <Information>Neil Alden Armstrong</Information>
                <InfoTitle>Birth date</InfoTitle>
                <Information>1930. 08. 05</Information>
                <InfoTitle>Nationality</InfoTitle>
                <Information>USA</Information>
                <InfoTitle>Hobby</InfoTitle>
                <Information>Stargazing, Solve math problems</Information>
            </Info>
        </Page2Container>
    </Page2>

    <Page3>
        <Text>What is an astonaut?</Text>
        <Page3Container>
            <Planet1 src="/img/planet_1.svg" />
            <Planet2 src="/img/planet_2.svg" />
            <Planet3 src="/img/planet_3.svg" />
            <SpaceMan2 src="/img/section_1.png" />
            <SpaceMan2 src="/img/section_2.png" />
            <SpaceMan2 src="/img/section_3.png" />
        </Page3Container>
    </Page3>

    <Page4>
        <Text2>My efforts to achieve my dream</Text2>
        <Page4Container>
            <DescPhoto>
                <Size>
                    <Photo src="/img/section_4.png" />
                </Size>
                <SmallText>
                I am learning Taekwondo to have healthy physical 
                strength and strong mental strength.
                </SmallText>
            </DescPhoto>

            <DescPhoto>
                <Size>
                    <Photo src="/img/section_5.png" />
                </Size>
                <SmallText>
                I review the math and science I learned at school 
                for an hour every day before going to bed.
                </SmallText>
            </DescPhoto>

            <DescPhoto>
                <Size>
                    <Photo src="/img/section_6.png" />
                </Size>
                <SmallText>
                I am planning to prepare various certifications so 
                that I can use computers proficiently.
                </SmallText>
            </DescPhoto>

            <DescPhoto>
                <Size>
                    <Photo src="/img/section_7.png" />
                </Size>
                <SmallText>
                Every day, I search and study space-related content 
                on YouTube.
                </SmallText>
            </DescPhoto>
        </Page4Container>
    </Page4>
    </>
}


const BackgroundImage = styled.div`
    background-image: url("/img/main_visual.png");
    width: 100%;
    height: 721px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
`;

const Container = styled.div`
    width: 1170px;
    height: 721px;
    margin: 0 auto;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const SpaceMan = styled("img")`
    position: absolute;
    z-index: 2;
    top: 428px;
    right: 203px;
    animation: spaceman1 3s Infinite Alternate; 

    @keyframes spaceman1 {
        from{
            top: 406px;
            right: 151px;
        }

        to{
            top: 275px;
            right: 86px;
        }
    }
`;



const Rocket = styled("img")`
    position: absolute;
    z-index: 2;
    bottom: 84px;
    left: 50px;
    animation: rocket 3s ease-in Infinite; 

    @keyframes rocket {
        0%{
            bottom: 84px;
            left: 50px;
        }

        100%{
            bottom: 720px;
            left: 930px;
        }
    } 
`;

const Title = styled.div`
    text-align: center;
    font-family: 'Bungee', sans-serif;  
`;

const SmallTitle = styled.div`
    color: #E2D4FF;
    font-size: 44px;
`;

const MainTitle = styled.div`
    position: relative;
    color: #FFED48;
    font-size: 80px;
    z-index: 3;
`;

const Page2 = styled.div``;

const Page2Container = styled.div`
    width: 1170px;
    margin: 0 auto;
    background-color: white;
    padding: 100px 0px;
    display: flex;
    align-items: center;
`;

const Armstrong = styled("img")`
`;

const Info = styled.div`
    margin-left: 44px;
`;

const InfoTitle = styled.div`
    color: #D9D7EC;
    font-size: 24px;
    font-style: italic;
`;

const Information = styled.div`
    color: #070052;
    font-size: 40px;
    margin-top: 8px;
    margin-bottom: 30px;
`;


const Page3 = styled.div`
    background-color: #310382;
    padding: 100px 0px;
    position: relative;
`;

const Page3Container = styled.div`
    width: 1170px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Text = styled.div`
    color: #FFED48;
    font-size: 40px;
    text-align: center;
    margin-bottom: 50px;
`;

const SpaceMan2 = styled("img")`
    border-radius: 50%;
    transition: all .4s;

    &:hover {
        transform: scale(1.2)
    }
`;

const Planet1 = styled("img")`
    position: absolute;
    z-index: 2;
    left: 0px;
    animation: float1 3s Infinite Alternate;

    @keyframes float1{
        from{
            bottom: 61px;
            left: 0px;
        }

        to{
            bottom: 104px;
        }
    }
`;

const Planet2 = styled("img")`
    position: absolute;
    right: 0px;
    z-index: 2;
    animation: float2 3s Infinite Alternate;

    @keyframes float2{
        from{
            top: 52px;
            right: 0px;
        }

        to{
            top: 111px;
        }
    }
`;



const Planet3 = styled("img")`
    position: absolute;
    bottom: 124px;
    right: 485px;
    z-index: 2;
    animation: turningplanet 4s linear Infinite;

    @keyframes turningplanet{
        to{
            transform: rotate(0deg);
        }

        from{
            transform: rotate(360deg);
        }
    }
`;


const Page4 = styled.div`
    background-color: #8123DC;
    padding: 100px 0px;
    position: relative;
`;

const Page4Container = styled.div`
    width: 1170px;  
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    //
`;

const Text2 = styled.div`
    color: #E2D4FF;
    font-size: 40px;
    text-align: center;
    margin: 50px;
`;

const DescPhoto = styled.div`
`;

const Photo = styled("img")`
    width: 100%;
`;

const SmallText = styled.div`
    color: #FFF;
    text-align: center;
    font-size: 20px;
    line-height: 1.5;
    width: 284px;
`;

const Size = styled.div`
    width: 284px;
    height: 284px;
    overflow: hidden;
    margin-bottom: 14px;
`;



export default Home;