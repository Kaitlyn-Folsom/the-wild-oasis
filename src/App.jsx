import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Heading from './ui/Heading';
import Row from './ui/Row';
import Button from './ui/Button';

const StyledApp = styled.div`
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row>
          <Row type='horizontal'>
            <Heading as='h1'>Hello world!</Heading>
            <div>
              <Heading as='h2'>Check in and out</Heading>
              <Button>Check in</Button>
              <Button variation='secondary' size='medium'>
                Check out
              </Button>
            </div>
          </Row>
          <Row>
            <Heading as='h3'>Form</Heading>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
