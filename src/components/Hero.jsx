import React, {useState, useEffect}from 'react';

    const Hero = () => {
        const [theme, setTheme] = useState('light');

        useEffect(() => {
            const savedTheme = localStorage.getItem('theme');
            const systemPefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            if (savedTheme) {
                setTheme(savedTheme);
            } else if (systemPefersDark){
                setTheme('dark')
            }
        }, []);
        useEffect(()=>{
            const html = document.documentElement;
            html.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
        },[theme]);

        const toggleTheme = () => {
            setTheme(theme === 'light' ? 'dark' : 'light');
        };

  return (
    <section className='relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden'>
        <button
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark' } mode`}
        className='absolute top-6 right-6 p-2 rounded-full bg-gray-200 dark:bg-gray-700
        hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors'
        >
            {
                theme === 'dark' ? (
                    <span className='text-yellow-300 text-xl'>🌞</span>
                ):(
                    <span className='text-gray-700 text-xl'>🌙</span>
                )
            }
        </button>
        <div className='max-w-7xl mx-auto text-center'>
            <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6'>
                <span className='block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 
                to-indigo-500 dark:from-blue-400 dark:to-indigo-300'>
                    Welcome to Our Platform
                </span>
            </h1>
            <p className='mt-6 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed text-black dark:text-white'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sit error, a molestias perferendis unde ipsa dolorem natus amet adipisci eius tempore provident corporis molestiae quidem.
            </p>
            <div className='mt-10 flex flex-col sm:flex-row justify-center gap-4'>
                <a
                href="#"
                className='px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors'>
                    Get Started
                </a>
                 <a
                href="#"
                className='px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 dark:text-indigo-200 bg-indigo-100 hover:bg-indigo-200 dark:bg-indigo-900 dark:hover:bg-indigo-800 transition-colors'>
                    Learn More 
                </a>
            </div>
        </div>
        <div className='absolute inset-0 -z-10 overflow-hidden'>
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 dark:opacity-30 dark:bg-purple-600"></div>

            <div className="absolute top-0 right-1/4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 dark:opacity-30 dark:bg-blue-600"></div>

            <div className="absolute top-0 left-1/2 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 dark:opacity-30 dark:bg-indigo-600"></div>
        </div>
    </section>
  )
}

export default Hero