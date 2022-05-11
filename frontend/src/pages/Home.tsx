import Navbar from '../components/Navbar';
import Shifts from '../components/Shifts';

const Home = () => {
  document.title = '5600 Shifts';
  return (
    <>
      <Navbar />
      <Shifts />
    </>
  );
};

export default Home;
