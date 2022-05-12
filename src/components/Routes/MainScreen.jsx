import styled from 'styled-components';
import Container from '../Layout/Container';
import SideBar from '../Layout/SideBar';
import WindowMain from '../Layout/WindowMain';

function MainScreen() {
   
  return (
    <ContainerExtended>
      <SideBar />
      <WindowMain />
    </ContainerExtended>
  )
}

export default MainScreen;

const ContainerExtended = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: start;
  background-color: var(--color-2);
`