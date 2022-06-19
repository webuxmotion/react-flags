import { useCleanup } from '../features/controls/use-cleanup';
import { Header } from '../ui/Header/Header';

export const HeaderContainer = () => {
  const cleanUp = useCleanup();

  return (
    <Header
      cleanUp={() => {
        cleanUp();
        console.log('click');
      }}
    />
  );
};
