import styled from '@emotion/styled'

function Rainbow() {
  return (
    <Container>
      <Box bgColor='red' margin={10}/>
      <Box bgColor='orange' margin={20}/>
      <Box bgColor='yellow' margin={30}/>
      <Box bgColor='green' margin={40}/>
      <Box bgColor='blue' margin={50}/>
      <Box bgColor='navy' margin={60}/>
      <Box bgColor='purple' margin={70}/>
    </Container>

  );
}

const Container = styled.div`
  display: flex;
`;

const Box = styled.div<{bgColor: string; margin: number}>`
  flex: 1;
  height: 100px;
  background-color: ${(props) => props.bgColor};
  margin-top: ${(props) => `${props.margin}px`};
`;

export default Rainbow;

