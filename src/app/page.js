"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("");
  const words = [
    "I'm a Software Developer",
    "Creative Problem Solver",
    "UI/UX Enthusiast",
    "Full Stack Engineer",
    "Open Source Contributor",
    "Technology Explorer"
  ];

  useEffect(() => {
    let wordIndex = 0;
    let charIndex = 0;
    let direction = 1;
    const typingSpeed = 100;
    const pauseTime = 1500;

    const type = () => {
      const currentWord = words[wordIndex];
      if (direction === 1) {
        setText(currentWord.slice(0, charIndex + 1));
        charIndex++;
        if (charIndex === currentWord.length) {
          direction = -1;
          setTimeout(type, pauseTime);
          return;
        }
      } else {
        setText(currentWord.slice(0, charIndex - 1));
        charIndex--;
        if (charIndex === 0) {
          direction = 1;
          wordIndex = (wordIndex + 1) % words.length;
        }
      }
      setTimeout(type, typingSpeed);
    };

    type();
  }, [words]);

  return (
    <div className="bg-[#0d1117] text-[#c9d1d9] font-sans min-h-screen">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 border-b border-[#21262d] sticky top-0 bg-[#0d1117] z-50">
        <h1 className="text-3xl font-bold tracking-wide text-white">Alonje</h1>
        <div className="hidden md:flex gap-10 text-lg">
          <a href="#about" className="hover:text-[#58a6ff] transition">About</a>
          <a href="#projects" className="hover:text-[#58a6ff] transition">Projects</a>
          <a href="#contact" className="hover:text-[#58a6ff] transition">Contact</a>
          <a href="#resume" className="hover:text-[#58a6ff] transition">Resume</a>
        </div>
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="md:hidden bg-[#161b22] p-4 space-y-4">
          <a href="#about" className="block py-2 text-lg border-b border-[#30363d]">About</a>
          <a href="#projects" className="block py-2 text-lg border-b border-[#30363d]">Projects</a>
          <a href="#contact" className="block py-2 text-lg border-b border-[#30363d]">Contact</a>
          <a href="#resume" className="block py-2 text-lg">Resume</a>
        </div>
      )}

      {/* Hero Section */}
      <section className="h-[80vh] flex flex-col items-center justify-center px-4 text-center bg-gradient-to-br from-[#0d1117] to-[#161b22]">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 animate-pulse">{text}<span className="text-[#58a6ff]">|</span></h2>
        <p className="text-xl text-[#8b949e] max-w-xl">
          Welcome to my digital playground where code meets creativity. Let&apos;s build something amazing together.
          Explore my projects, learn about my journey, and feel free to connect.
        </p>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 border-b border-[#30363d] pb-2">About Me</h2>
        <p className="text-lg leading-relaxed">
          I&apos;m a passionate software developer with a knack for clean UI and robust backend logic.
          I studied Computer Science at Maseno University and love crafting user-centric digital experiences.
          I thrive in environments that challenge my creativity and push me to learn continuously.
          My interests span across front-end development, backend services, and everything in between.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 border-b border-[#30363d] pb-2">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((project) => (
            <div key={project} className="bg-[#161b22] p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Project {project}</h3>
              <p className="text-sm text-[#8b949e]">
                This is a description of project {project}. It solves a real-world problem with elegance and innovation.
                The project involved modern tech stacks and emphasized maintainability and scalability.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 border-b border-[#30363d] pb-2">Resume</h2>
        <p className="mb-4 text-lg">
          I graduated from Maseno University with a degree in Computer Science.
          I have strong foundations in algorithms, data structures, and software architecture.
        </p>
        <a
          href="/resume.pdf"
          download
          className="inline-block px-6 py-3 bg-[#238636] hover:bg-[#2ea043] text-white font-medium rounded shadow"
        >
          Download My CV
        </a>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 border-b border-[#30363d] pb-2">Contact Me</h2>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" placeholder="Name" className="bg-[#0d1117] border border-[#30363d] px-4 py-2 rounded focus:ring-2 focus:ring-[#238636]" />
            <input type="email" placeholder="Email" className="bg-[#0d1117] border border-[#30363d] px-4 py-2 rounded focus:ring-2 focus:ring-[#238636]" />
          </div>
          <textarea rows="5" placeholder="Your Message" className="w-full bg-[#0d1117] border border-[#30363d] px-4 py-2 rounded focus:ring-2 focus:ring-[#238636]" />
          <button type="submit" className="bg-[#238636] hover:bg-[#2ea043] text-white px-6 py-2 rounded font-medium">
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-[#21262d] text-sm text-[#8b949e]">
        © 2025 Alonje. Designed & developed with ❤️, creativity, and lots of JavaScript.
      </footer>
    </div>
  );
}
