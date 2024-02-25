import { PrimeReactProvider } from 'primereact/api';
import Header from './componens/header/Header';
import Body from './componens/body/Body';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { ScrollPanel } from 'primereact/scrollpanel';

function App() {


  return (
    <PrimeReactProvider >
      <Header />
      <div className="card">
        <ScrollPanel style={{ width: '100%', height: '70vh' }}>
          <Body />
        </ScrollPanel>
      </div>
    </PrimeReactProvider>
  );
}

export default App;
