import { Container } from '../../components/Container';
import { ThemeSwitcher } from '../../features/theme/ThemeSwitcher';
import { HeaderEl, Title, Wrapper } from './Header.styles';

export const Header = ({ cleanUp }) => {
  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title onClick={cleanUp}>Where is the world?</Title>
          <ThemeSwitcher />
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};
