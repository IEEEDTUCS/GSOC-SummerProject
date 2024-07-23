// graph wala portion mil jaaye baaki chije daal do 
// IEEE form like tasneem se le lena
import HomeCard from "@components/HomeCard/HomeCard";

function Home() {
  return (
    <>
      <h1 className="text-5xl font-semibold" style={{ background: 'linear-gradient(to bottom, #ffffff, #777777)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>A GSOC dashboard for IEEE DTU</h1><br />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis non quia beatae velit ipsum, ullam at perspiciatis enim. Deserunt asperiores facere dolorum blanditiis, soluta atque vitae provident eligendi quaerat. Molestias?</p><br />

      <div class="flex items-center justify-center space-x-4">
        <input type="text" placeholder="Search" class="w-[700px] h-[42px] px-4 py-2 border-2 bg-transparent rounded-full focus:ring-2 " />
        <button class="ml-10 text-sm" style={{ backgroundColor: '#7700ff', padding: '10px 20px', borderRadius: '24px' }}>Search</button>
      </div>
      <br /><br />

      <div className="flex w-500px justify-center items-center">
        <HomeCard />
      </div>
      <br /><br />

      <div class="flex items-center justify-center">
        <div class="flex w-[600px] h-[100px] justify-center items-center border-2 rounded-lg" style={{ borderColor: '#282D45', backgroundColor: '#0e1330', borderRadius: '8px' }}>
          <p>Get IEEE DTU membership NOW!</p>
          <a href="#" class="ml-10 text-sm" style={{ backgroundColor: '#7700ff', padding: '10px 20px', borderRadius: '24px' }}>Google Form</a>
        </div>
      </div>
    </>
  );
}

export default Home;
