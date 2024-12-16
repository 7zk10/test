'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import dynamic from 'next/dynamic';

const Icons = {
  YouTube: dynamic(() => import('react-icons/fa').then(mod => mod.FaYoutube), { ssr: false }),
  Discord: dynamic(() => import('react-icons/fa').then(mod => mod.FaDiscord), { ssr: false }),
  Twitch: dynamic(() => import('react-icons/fa').then(mod => mod.FaTwitch), { ssr: false }),
  TikTok: dynamic(() => import('react-icons/fa').then(mod => mod.FaTiktok), { ssr: false })
};

const YOUTUBE_CHANNEL = 'https://www.youtube.com/@Nuwex';
const TIKTOK_PROFILE = 'https://www.tiktok.com/@nuwex10';
const TWITCH_CHANNEL = 'https://www.twitch.tv/nuwex9';
const DISCORD_SERVER = 'https://discord.gg/epUrWwW46G';

const navItems = [
  { 
    name: 'يوتيوب',
    href: '#youtube',
    icon: Icons.YouTube,
    externalLink: YOUTUBE_CHANNEL,
    color: 'hover:text-[#FF0000]'
  },
  { 
    name: 'تيك توك',
    href: '#tiktok',
    icon: Icons.TikTok,
    externalLink: TIKTOK_PROFILE,
    color: 'hover:text-white'
  },
  { 
    name: 'ديسكورد',
    href: '#discord',
    icon: Icons.Discord,
    externalLink: DISCORD_SERVER,
    color: 'hover:text-[#5865F2]'
  },
  { 
    name: 'تويتش',
    href: '#twitch',
    icon: Icons.Twitch,
    externalLink: TWITCH_CHANNEL,
    color: 'hover:text-[#9146FF]'
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <nav className="fixed top-0 z-50 w-full bg-gradient-to-b from-gray-900/90 to-gray-900/50 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-2 sm:px-4">
        <div className="flex h-14 items-center justify-between">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-white font-arabic">Nuwex</h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-1 rtl:space-x-reverse">
              {navItems.map((item) => (
                <div key={item.href} className="flex items-center gap-1">
                  {item.icon && (
                    <a
                      href={item.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`transform text-lg text-white/80 transition-all duration-300 hover:scale-110 ${item.color || ''}`}
                      style={{ WebkitTextFillColor: 'inherit' }}
                    >
                      <item.icon />
                    </a>
                  )}
                  <button
                    onClick={() => handleClick(item.href)}
                    className="rounded-md px-2 py-1.5 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white font-arabic"
                    style={{ WebkitTextFillColor: 'inherit' }}
                  >
                    {item.name}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-1.5 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              style={{ WebkitTextFillColor: 'inherit' }}
            >
              {isOpen ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <motion.div
        className="md:hidden"
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, height: 'auto' },
          closed: { opacity: 0, height: 0 }
        }}
      >
        <div className="space-y-0.5 px-2 pb-2 pt-1">
          {navItems.map((item) => (
            <div key={item.href} className="flex items-center gap-1 p-1">
              {item.icon && (
                <a
                  href={item.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transform text-lg text-white/80 transition-all duration-300 hover:scale-110 ${item.color || ''}`}
                  style={{ WebkitTextFillColor: 'inherit' }}
                >
                  <item.icon />
                </a>
              )}
              <button
                onClick={() => handleClick(item.href)}
                className="block w-full rounded-md px-2 py-1.5 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white text-right font-arabic"
                style={{ WebkitTextFillColor: 'inherit' }}
              >
                {item.name}
              </button>
            </div>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default dynamic(() => Promise.resolve(Navbar), { ssr: false }); 