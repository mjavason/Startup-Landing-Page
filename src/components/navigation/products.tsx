import Image from 'next/image';

const ProductSubNavBar = () => {
  return (
    <div className='absolute left-0 top-full w-full bg-primary-500 shadow-lg grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 p-6 z-40  border-t-2 border-[#6757AE]'>
      {[
        {
          img: '/images/smartphones.png',
          title: 'Smartphones',
          desc: 'Top technology in our store. Hurry up for sales',
        },
        {
          img: '/images/laptops.png',
          title: 'Laptops',
          desc: 'The powerful laptops for our members',
        },
        {
          img: '/images/headsets.png',
          title: 'Headsets',
          desc: 'High sound quality headphones for you',
        },
        {
          img: '/images/webcams.png',
          title: 'Webcams',
          desc: 'Show off yourself with cool webcams',
        },
        {
          img: '/images/goprocams.png',
          title: 'GoPro Cams',
          desc: 'Action cam. Capture. Create. Share.',
        },
        {
          img: '/images/mouse.png',
          title: 'Mouses',
          desc: 'Optical, Wireless, Gaming Mouses',
        },
        {
          img: '/images/projector.png',
          title: 'Projectors',
          desc: 'HighRes Projectors with Built-In TV',
        },
        {
          img: '/images/monitor.png',
          title: 'Monitors',
          desc: 'QHD resolution widescreen monitors',
        },
      ].map((product, index) => (
        <div key={index} className='flex flex-col gap-5 p-5'>
          <div className='w-full h-12 flex items-center'>
            <Image
              src={product.img}
              alt={product.title}
              width={48}
              height={48}
              className='h-full object-contain'
            />
          </div>
          <h3 className='text-xl'>{product.title}</h3>
          <p className='text-md text-[#C1BADF]'>{product.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductSubNavBar;
