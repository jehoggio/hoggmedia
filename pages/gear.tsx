import Head from 'next/head';
import GearList from '../components/GearList';

const Gear = () => {
  return (
    <div>
      <Head>
        <title>Gear</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mb-4">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mt-1 text-4xl font-extrabold sm:text-5xl sm:tracking-tight lg:text-6xl">
              Recording Equipment
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl ">
              Get started recording or streaming
            </p>
          </div>
        </div>
      </div>
      <GearList />
    </div>
  );
};

export default Gear;
