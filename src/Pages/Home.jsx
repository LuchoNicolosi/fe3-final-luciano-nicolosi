import { CardList } from '../Components/CardList';
import { useGlobalStates } from '../Components/utils/global.context';

function Home() {
  const { dentists } = useGlobalStates();
  return <CardList dentists={dentists} />;
}

export default Home;
