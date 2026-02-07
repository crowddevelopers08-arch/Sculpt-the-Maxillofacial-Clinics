import React, { useState } from 'react';

const HeroSectionhair = () => {        
    const [expanded, setExpanded] = useState(false);

    return (
      <>
       <style jsx global>{`
      @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
      `}</style>
        <div className="min-h-screen" style={{fontFamily: "'Outfit', sans-serif"}}>
    <header className="py-4 bg-black sm:py-6">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
               <div className="shrink-0">
  <a href="#" className="flex">
    <img
      src="bglogo.png"
      alt="Brand Logo"
      className="h-10 w-auto sm:h-12 md:h-14 lg:h-16 xl:h-18 object-contain"
    />
  </a>
</div>

                <div className="relative md:items-center md:justify-center md:inline-flex group">
                    <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-[#c99500] to-[#e6bc4e] group-hover:shadow-lg group-hover:shadow-[#c99500]/50"></div>
                    <a href="tel:9606601166" className="relative inline-flex items-center justify-center px-6 py-2 text-base max-[470px]:text-[15px] font-normal text-white bg-black border border-transparent rounded-full" role="button"> +91 9606601166 </a>
                </div>
            </div>
        </div>
    </header>

    <section className="relative flex items-center min-h-[calc(90vh-88px)] overflow-hidden bg-black">
        <div className="px-4 mx-auto relative sm:px-6 lg:px-8 max-w-7xl w-full">
            <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 gap-x-16">
                <div className='max-[470px]:text-center'>
                    <h1 className="text-3xl font-normal text-white sm:text-4xl lg:text-5xl xl:text-6xl">Bangalore’s Trusted Choice for Natural Hair Transplants.</h1>
                    <p className="mt-4 text-base font-normal text-gray-400 sm:mt-6 sm:text-lg">Permanent, Natural-Looking Results. No Wigs, No Pills, No False Promises.</p>

                    <div className="mt-2 sm:mt-4">
                        <div className="flex max-[470px]:justify-center items-center">
                            <div className="flex">
                                <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M10.8586 4.71248C11.2178 3.60691 12.7819 3.60691 13.1412 4.71248L14.4246 8.66264C14.5853 9.15706 15.046 9.49182 15.5659 9.49182H19.7193C20.8818 9.49182 21.3651 10.9794 20.4247 11.6626L17.0645 14.104C16.6439 14.4095 16.4679 14.9512 16.6286 15.4456L17.912 19.3958C18.2713 20.5013 17.0059 21.4207 16.0654 20.7374L12.7052 18.2961C12.2846 17.9905 11.7151 17.9905 11.2945 18.2961L7.93434 20.7374C6.99388 21.4207 5.72851 20.5013 6.08773 19.3958L7.37121 15.4456C7.53186 14.9512 7.35587 14.4095 6.93529 14.104L3.57508 11.6626C2.63463 10.9794 3.11796 9.49182 4.28043 9.49182H8.43387C8.95374 9.49182 9.41448 9.15706 9.57513 8.66264L10.8586 4.71248Z"
                                        fill="url(#b)"
                                    />
                                    <defs>
                                        <linearGradient id="b" x1="3.07813" y1="3.8833" x2="23.0483" y2="6.90161" gradientUnits="userSpaceOnUse">
                                            <stop offset="0%" stopColor="#c99500" />
                                            <stop offset="100%" stopColor="#e6bc4e" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M10.8586 4.71248C11.2178 3.60691 12.7819 3.60691 13.1412 4.71248L14.4246 8.66264C14.5853 9.15706 15.046 9.49182 15.5659 9.49182H19.7193C20.8818 9.49182 21.3651 10.9794 20.4247 11.6626L17.0645 14.104C16.6439 14.4095 16.4679 14.9512 16.6286 15.4456L17.912 19.3958C18.2713 20.5013 17.0059 21.4207 16.0654 20.7374L12.7052 18.2961C12.2846 17.9905 11.7151 17.9905 11.2945 18.2961L7.93434 20.7374C6.99388 21.4207 5.72851 20.5013 6.08773 19.3958L7.37121 15.4456C7.53186 14.9512 7.35587 14.4095 6.93529 14.104L3.57508 11.6626C2.63463 10.9794 3.11796 9.49182 4.28043 9.49182H8.43387C8.95374 9.49182 9.41448 9.15706 9.57513 8.66264L10.8586 4.71248Z"
                                        fill="url(#b)"
                                    />
                                    <defs>
                                        <linearGradient id="b" x1="3.07813" y1="3.8833" x2="23.0483" y2="6.90161" gradientUnits="userSpaceOnUse">
                                            <stop offset="0%" stopColor="#c99500" />
                                            <stop offset="100%" stopColor="#e6bc4e" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M10.8586 4.71248C11.2178 3.60691 12.7819 3.60691 13.1412 4.71248L14.4246 8.66264C14.5853 9.15706 15.046 9.49182 15.5659 9.49182H19.7193C20.8818 9.49182 21.3651 10.9794 20.4247 11.6626L17.0645 14.104C16.6439 14.4095 16.4679 14.9512 16.6286 15.4456L17.912 19.3958C18.2713 20.5013 17.0059 21.4207 16.0654 20.7374L12.7052 18.2961C12.2846 17.9905 11.7151 17.9905 11.2945 18.2961L7.93434 20.7374C6.99388 21.4207 5.72851 20.5013 6.08773 19.3958L7.37121 15.4456C7.53186 14.9512 7.35587 14.4095 6.93529 14.104L3.57508 11.6626C2.63463 10.9794 3.11796 9.49182 4.28043 9.49182H8.43387C8.95374 9.49182 9.41448 9.15706 9.57513 8.66264L10.8586 4.71248Z"
                                        fill="url(#b)"
                                    />
                                    <defs>
                                        <linearGradient id="b" x1="3.07813" y1="3.8833" x2="23.0483" y2="6.90161" gradientUnits="userSpaceOnUse">
                                            <stop offset="0%" stopColor="#c99500" />
                                            <stop offset="100%" stopColor="#e6bc4e" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M10.8586 4.71248C11.2178 3.60691 12.7819 3.60691 13.1412 4.71248L14.4246 8.66264C14.5853 9.15706 15.046 9.49182 15.5659 9.49182H19.7193C20.8818 9.49182 21.3651 10.9794 20.4247 11.6626L17.0645 14.104C16.6439 14.4095 16.4679 14.9512 16.6286 15.4456L17.912 19.3958C18.2713 20.5013 17.0059 21.4207 16.0654 20.7374L12.7052 18.2961C12.2846 17.9905 11.7151 17.9905 11.2945 18.2961L7.93434 20.7374C6.99388 21.4207 5.72851 20.5013 6.08773 19.3958L7.37121 15.4456C7.53186 14.9512 7.35587 14.4095 6.93529 14.104L3.57508 11.6626C2.63463 10.9794 3.11796 9.49182 4.28043 9.49182H8.43387C8.95374 9.49182 9.41448 9.15706 9.57513 8.66264L10.8586 4.71248Z"
                                        fill="url(#b)"
                                    />
                                    <defs>
                                        <linearGradient id="b" x1="3.07813" y1="3.8833" x2="23.0483" y2="6.90161" gradientUnits="userSpaceOnUse">
                                            <stop offset="0%" stopColor="#c99500" />
                                            <stop offset="100%" stopColor="#e6bc4e" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M10.8586 4.71248C11.2178 3.60691 12.7819 3.60691 13.1412 4.71248L14.4246 8.66264C14.5853 9.15706 15.046 9.49182 15.5659 9.49182H19.7193C20.8818 9.49182 21.3651 10.9794 20.4247 11.6626L17.0645 14.104C16.6439 14.4095 16.4679 14.9512 16.6286 15.4456L17.912 19.3958C18.2713 20.5013 17.0059 21.4207 16.0654 20.7374L12.7052 18.2961C12.2846 17.9905 11.7151 17.9905 11.2945 18.2961L7.93434 20.7374C6.99388 21.4207 5.72851 20.5013 6.08773 19.3958L7.37121 15.4456C7.53186 14.9512 7.35587 14.4095 6.93529 14.104L3.57508 11.6626C2.63463 10.9794 3.11796 9.49182 4.28043 9.49182H8.43387C8.95374 9.49182 9.41448 9.15706 9.57513 8.66264L10.8586 4.71248Z"
                                        fill="url(#b)"
                                    />
                                    <defs>
                                        <linearGradient id="b" x1="3.07813" y1="3.8833" x2="23.0483" y2="6.90161" gradientUnits="userSpaceOnUse">
                                            <stop offset="0%" stopColor="#c99500" />
                                            <stop offset="100%" stopColor="#e6bc4e" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <span className="ml-2 text-base font-normal text-white sm:text-lg"> 4.9/5 Google Rating </span>
                        </div>
                        
                        <div className="flex items-center max-[470px]:justify-center mt-4">
                            <span className="text-base font-normal text-white sm:text-lg">7+ Years of Trusted Experience</span>
                        </div>
                        
                        <div className="flex items-center max-[470px]:justify-center mt-4">
                            <span className="text-base font-normal text-white sm:text-lg">2000+ Happy Patients</span>
                        </div>
                    </div>

                    <div className="relative mt-4 sm:mt-4">
                        <div className="relative inline-flex items-center justify-center group">
                            <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-[#c99500] to-[#e6bc4e] group-hover:shadow-lg group-hover:shadow-[#c99500]/50"></div>
                            <a href="#hairform" className="relative inline-flex items-center justify-center px-6 py-3 text-base font-normal text-white bg-black border border-transparent rounded-full sm:px-8 sm:py-4 sm:text-lg" role="button"> Begin My Hair Journey </a>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute inset-0">
                        <svg className="blur-3xl filter opacity-70 w-full h-full max-w-2xl mx-auto" style={{filter: 'blur(64px)'}} viewBox="0 0 444 536" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M225.919 112.719C343.98 64.6648 389.388 -70.487 437.442 47.574C485.496 165.635 253.266 481.381 135.205 529.435C17.1445 577.488 57.9596 339.654 9.9057 221.593C-38.1482 103.532 107.858 160.773 225.919 112.719Z" fill="url(#c)" />
                            <defs>
                                <linearGradient id="c" x1="82.7339" y1="550.792" x2="-39.945" y2="118.965" gradientUnits="userSpaceOnUse">
                                    <stop offset="0%" stopColor="#c99500" />
                                    <stop offset="100%" stopColor="#e6bc4e" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>

                    <div className="absolute inset-0">
                        <img className="object-cover w-full h-full opacity-50" src="https://landingfoliocom.imgix.net/store/collection/dusk/images/noise.png" alt="" />
                    </div>

                    <img 
                        className="relative w-full max-[470px]:mb-[20px] max-w-lg mx-auto sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl" 
                        src="blureed.png" 
                        alt="Hair transplant before and after results" 
                    />
                </div>
            </div>
        </div>
    </section>
</div>
</>
    )
}
export default HeroSectionhair;