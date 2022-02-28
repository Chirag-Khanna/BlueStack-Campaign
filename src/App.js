import Campaigns from './components/Campaigns/Campaigns';
import Header from './components/Layout/Header';
import CampaignProvider from './store/CampaignProvider';

function App() {

  return (
    <CampaignProvider>
    <Header />
    <div className="container">
      <div className="heading"> Manage Campaigns </div>
      <Campaigns></Campaigns>
    </div>
    </CampaignProvider>
  );
}

export default App;
