// graph wala portion mil jaaye baaki chije daal do 
// IEEE form like tasneem se le lena
import HomeCard from "@components/HomeCard/HomeCard";

function Home() {
  const a = 23;
  console.log(a);
  return (
    <>
      <h1 className="text-3xl font-bold">A GSOC dashboard for IEEE DTU</h1>
      <div className="flex justify-center items-center">
        <HomeCard/>
      </div>
    </>
  );
}

export default Home;
