import TopicMenu from 'components/TopicMenu';
import { PiecefulProvider } from 'react-pieceful-state';

const App = () => (
  <PiecefulProvider>
    <TopicMenu />
  </PiecefulProvider >
);

export default App;
