import Image from 'next/image';
import '../styles/about/about.css'

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" >
        <Image src="/assets/images/nepalflag.png" alt="Nepal Flag" width={5000} height={59000} className='w-full h-full absolute -z-10 opacity-5'/>

      <div className="space-y-2 text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          About Nepal
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Discover the land of ancient traditions, majestic mountains, and vibrant cultures
        </p>
      </div>

      <section className="mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold text-white">History & Culture</h2>
              <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Nepal, a country nestled in the heart of the Himalayas, boasts a rich history dating back thousands of years. As the birthplace of Buddha and home to ancient Hindu traditions, Nepal's cultural heritage is as diverse as its landscape.
            </p>
            <p className="text-gray-400 leading-relaxed">
              The country's unique blend of Hindu and Buddhist traditions has created a tapestry of festivals, architecture, and art that continues to captivate visitors from around the world.
            </p>
          </div>
          <div className="relative h-[500px] group">
            <Image
              src="/assets/images/nepalCulture.jpg"
              alt="Nepalese Culture"
              fill
              className="object-cover rounded-2xl shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-transparent to-black/20 group-hover:to-black/30 transition-all"></div>
          </div>
        </div>
      </section>

      <section className="mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative h-[500px] group">
            <Image
              src="/assets/images/aboutPage.jpg"
              alt="Nepal Geography"
              fill
              className="object-cover rounded-2xl shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-transparent to-black/20 group-hover:to-black/30 transition-all"></div>
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold text-white">Geography</h2>
              <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              From the towering peaks of the Himalayas to the subtropical forests of the Terai, Nepal's geography is incredibly diverse. The country is home to eight of the world's ten tallest mountains, including Mount Everest.
            </p>
            <p className="text-gray-400 leading-relaxed">
              This dramatic variation in altitude creates distinct ecological zones, each with its own unique flora, fauna, and climate, making Nepal a paradise for nature enthusiasts and adventure seekers.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="text-center mb-12 space-y-2">
          <h2 className="text-3xl font-semibold text-white">Popular Activities</h2>
          <div className="h-1 w-20 bg-blue-600 rounded-full mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Trekking',
              description: 'Explore the world-famous trekking routes through the Himalayas.',
              image: '/assets/images/trekking.jpg'
            },
            {
              title: 'Cultural Exploration',
              description: 'Visit ancient temples, monasteries, and traditional villages.',
              image: '/assets/images/culturalNepal.jpg'
            },
            {
              title: 'Adventure Sports',
              description: 'Experience paragliding, rafting, and mountain biking.',
              image: '/assets/images/adventureSports.jpg'
            }
          ].map((activity, index) => (
            <div 
              key={index} 
              className="group bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500/50 transition-all hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className="relative h-64">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  objectFit='contain'
                  className=" transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 group-hover:to-black/40 transition-all"></div>
              </div>
              <div className="p-6 space-y-2">
                <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                  {activity.title}
                </h3>
                <p className="text-gray-400">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      </div>
  );
}