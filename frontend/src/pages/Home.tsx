import Navbar from '../components/Navbar';
import Shifts from '../components/Shifts';

const Home = () => {
  document.title = 'Dashboard';
  return (
    <>
      <Navbar />
      <Shifts />
    </>
  );
};

export default Home;
