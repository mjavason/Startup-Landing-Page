function ProductSubNavBar() {
  return (
    <>
      <input
        id='products-sub-nav'
        type='checkbox'
        className='peer/products hidden'
      />
      <div className='w-[100%] grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 p-6 my-5 hidden peer-checked/products:grid'>
        <div className='flex flex-col gap-5 p-5'>
          <div className='w-full h-12 flex items-center'>
            <img
              src='/images/smartphones.png'
              alt=''
              className='h-full object-contain'
            />
          </div>
          <h3 className='text-xl'>Smartphones</h3>
          <p className='text-md text-[#C1BADF]'>
            Top technology in our store. Hurry up for sales
          </p>
        </div>

        <div className='flex flex-col gap-5 p-5'>
          <div className='w-full h-12 flex items-center'>
            <img
              src='/images/laptops.png'
              alt=''
              className='h-full object-contain'
            />
          </div>
          <h3 className='text-xl'>Laptops</h3>
          <p className='text-md text-[#C1BADF]'>
            The powerful laptops for our members
          </p>
        </div>

        <div className='flex flex-col gap-5 p-5'>
          <div className='w-full h-12 flex items-center'>
            <img
              src='/images/headsets.png'
              alt=''
              className='h-full object-contain'
            />
          </div>
          <h3 className='text-xl'>Headsets</h3>
          <p className='text-md text-[#C1BADF]'>
            High sound quality headphones for you
          </p>
        </div>

        <div className='flex flex-col gap-5 p-5'>
          <div className='w-full h-12 flex items-center'>
            <img
              src='/images/webcams.png'
              alt=''
              className='h-full object-contain'
            />
          </div>
          <h3 className='text-xl'>Webcams</h3>
          <p className='text-md text-[#C1BADF]'>
            Show off yourself with cool webcams
          </p>
        </div>

        <div className='flex flex-col gap-5 p-5'>
          <div className='w-full h-12 flex items-center'>
            <img
              src='/images/goprocams.png'
              alt=''
              className='h-full object-contain'
            />
          </div>
          <h3 className='text-xl'>GoPro Cams</h3>
          <p className='text-md text-[#C1BADF]'>
            Action cam. Capture. Create. Share.
          </p>
        </div>
        <div className='flex flex-col gap-5 p-5'>
          <div className='w-full h-12 flex items-center'>
            <img
              src='/images/mouse.png'
              alt=''
              className='h-full object-contain'
            />
          </div>
          <h3 className='text-xl'>Mouses</h3>
          <p className='text-md text-[#C1BADF]'>
            Optical, Wireless, Gaming Mouses
          </p>
        </div>

        <div className='flex flex-col gap-5 p-5'>
          <div className='w-full h-12 flex items-center'>
            <img
              src='/images/projector.png'
              alt=''
              className='h-full object-contain'
            />
          </div>
          <h3 className='text-xl'>Projectors</h3>
          <p className='text-md text-[#C1BADF]'>
            HighRes Projectors with Built-In TV
          </p>
        </div>

        <div className='flex flex-col gap-5 p-5'>
          <div className='w-full h-12 flex'>
            <img
              src='/images/monitor.png'
              alt=''
              className='h-full object-contain'
            />
          </div>
          <h3 className='text-xl'>Monitors</h3>
          <p className='text-md text-[#C1BADF]'>
            QHD resolution widescreen monitors
          </p>
        </div>
      </div>
    </>
  );
}

export default ProductSubNavBar;
