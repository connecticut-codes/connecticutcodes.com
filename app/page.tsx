import MainCard from './components/MainCard'
import CommunityImg from '../public/assets/community-icon.png'
export default function Home() {
  return (
    <>
    
    <div className="bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="container mx-auto py-24 px-4 sm:px-6 lg:px-8 h-screen">
        <div className="md:flex md:items-center md:justify-between h-full">
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-xl sm:text-4xl md:text-8xl font-bold text-white mb-4">
              Connecticut Codes
            </h1>
            <p className="text-lg text-gray-200 mb-6">
              We are a community of developers learning and growing together. We
              have regular in person and virtual events in order to collaborate,
              network, and code!
            </p>
            <button className="bg-white text-blue-500 font-semibold py-2 px-4 rounded-full shadow-md hover:bg-blue-600 hover:text-white transition duration-300">
              Join Us
            </button>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <img
              className="w-full mx-auto"
              src="hero-image.jpg"
              alt="Hero Image Placeholder"
            />
          </div>
        </div>
      </div>
    </div>
    <section className='max-w-screen-lg my-8 flex flex-wrap justify-center gap-2 m-auto'>
    <MainCard cardTitle={'Community'} cardContent={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo in, soluta  voluptatibus sit error obcaecati, nihil perferendis, '} cardImg={CommunityImg}/>
    <MainCard cardTitle={'Resources'} cardContent={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo in, soluta  voluptatibus sit error obcaecati, nihil perferendis, '}cardImg={CommunityImg}/>
    <MainCard cardTitle={'community'} cardContent={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo in, soluta  voluptatibus sit error obcaecati, nihil perferendis, '}cardImg={CommunityImg}/>
    </section>
    </>

  );
  
}
