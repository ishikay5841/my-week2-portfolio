import React, { useState } from 'react';

function App() {

  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "bg-[#010a16] text-white min-h-screen transition-colors duration-500" : "bg-gray-50 text-gray-900 min-h-screen transition-colors duration-500"}>
      
      
      <nav className={`flex justify-between items-center px-[10%] py-5 sticky top-0 z-50 ${darkMode ? "bg-[#00080e]/90" : "bg-white/90 shadow-sm"} backdrop-blur-md`}>
        <div className="text-xl font-bold tracking-widest text-blue-500 uppercase">Ishika Portfolio</div>
        <ul className="flex gap-8 items-center">
          <li className="hidden md:block hover:text-blue-500 cursor-pointer transition-colors"><a href="#about">About</a></li>
          <li className="hidden md:block hover:text-blue-500 cursor-pointer transition-colors"><a href="#skills">Skills</a></li>
          <li className="hidden md:block hover:text-blue-500 cursor-pointer transition-colors"><a href="#projects">Projects</a></li>
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="px-5 py-2 bg-blue-600 text-white rounded-full text-sm font-bold hover:bg-blue-700 hover:shadow-lg transform transition active:scale-95"
          >
            {darkMode ? '☀️ Light' : '🌙 Dark'}
          </button>
        </ul>
      </nav>

      
      <header className="h-[70vh] flex flex-col justify-center items-center text-center px-[10%] bg-blue-600 text-white relative overflow-hidden">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 animate-fade-in">
          Hi, I'm <span className={darkMode ? "text-[#010a16]" : "text-blue-100"}>Ishika Yenpreddiwar</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl">
          Final Year Engineering Student & Aspiring Developer from YCCE
        </p>
        <a href="#projects" className="bg-[#010a16] text-white px-10 py-4 rounded-full font-bold hover:scale-110 transition-transform duration-300 shadow-2xl">
          View My Work
        </a>
      </header>

      
      <section id="about" className="py-24 px-[10%] text-center">
        <h2 className="text-4xl font-bold mb-8 border-b-4 border-blue-600 inline-block">About Me</h2>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed opacity-80">
          I am a Computer Science (AIML) final year student at <strong>Yeshwantrao Chavan College Of Engineering</strong>. 
          I specialize in building responsive web solutions and integrating AI/ML concepts into real-world applications.
        </p>
      </section>

      
      <section id="skills" className={`py-20 px-[10%] text-center ${darkMode ? "bg-[#00080e]" : "bg-gray-100"}`}>
        <h2 className="text-4xl font-bold mb-12">Technical Skills</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {['HTML/CSS', 'JavaScript', 'Java', 'SQL', 'AIML', 'React.js', 'Tailwind CSS'].map((skill) => (
            <span key={skill} className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold shadow-md hover:-translate-y-2 transition-transform duration-300">
              {skill}
            </span>
          ))}
        </div>
      </section>

      
      <section id="projects" className="py-24 px-[10%]">
        <h2 className="text-4xl font-bold mb-16 text-center">Key Projects</h2>
        <div className="grid md:grid-cols-2 gap-10">
          
          
          <div className={`p-10 rounded-3xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer ${darkMode ? "bg-[#1e293b]" : "bg-white shadow-xl border border-gray-100"}`}>
            <div className="text-blue-500 text-sm font-bold uppercase mb-2">IoT & ML</div>
            <h3 className="text-2xl font-bold mb-4">Solar Power Prediction</h3>
            <p className="opacity-75 text-lg">
              Developing a system to monitor solar data via DynamoDB, using ML models to predict power generation for smarter energy use.
            </p>
          </div>

          
          <div className={`p-10 rounded-3xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer ${darkMode ? "bg-[#1e293b]" : "bg-white shadow-xl border border-gray-100"}`}>
            <div className="text-blue-500 text-sm font-bold uppercase mb-2">Web API</div>
            <h3 className="text-2xl font-bold mb-4">Live Weather App</h3>
            <p className="opacity-75 text-lg">
              A sleek application fetching real-time weather data from public APIs with a clean, responsive user interface.
            </p>
          </div>

        </div>
      </section>

      
      <section className="py-24 px-[10%] bg-blue-600 text-white">
        <div className="max-w-2xl mx-auto bg-white p-10 md:p-16 rounded-[2rem] text-gray-900 shadow-2xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
          <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-2">
              <label className="font-semibold px-1">Full Name</label>
              <input type="text" placeholder="Ishika Yenpreddiwar" className="p-4 border-2 rounded-xl focus:border-blue-500 outline-none transition-colors" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold px-1">Email Address</label>
              <input type="email" placeholder="name@example.com" className="p-4 border-2 rounded-xl focus:border-blue-500 outline-none transition-colors" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold px-1">Project Details</label>
              <textarea placeholder="Tell me about your project..." className="p-4 border-2 rounded-xl h-32 focus:border-blue-500 outline-none transition-colors resize-none"></textarea>
            </div>
            <button className="bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transform transition active:scale-95 shadow-lg mt-4">
              Send Message
            </button>
          </form>
        </div>
      </section>

      
      <footer className="py-12 text-center opacity-60 text-sm">
        <p>© 2026 Ishika Yenpreddiwar | Computer Science (AIML) | YCCE Nagpur</p>
      </footer>
    </div>
  );
}

export default App;
