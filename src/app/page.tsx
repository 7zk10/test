'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

// Dynamically import icons
const Icons = {
  YouTube: dynamic(() => import('react-icons/fa').then(mod => mod.FaYoutube), { ssr: false }),
  Discord: dynamic(() => import('react-icons/fa').then(mod => mod.FaDiscord), { ssr: false }),
  Twitch: dynamic(() => import('react-icons/fa').then(mod => mod.FaTwitch), { ssr: false }),
  TikTok: dynamic(() => import('react-icons/fa').then(mod => mod.FaTiktok), { ssr: false })
};

const ParticlesBackground = dynamic(() => import('@/components/ParticlesBackground'), {
  ssr: false,
  loading: () => null
});

const YOUTUBE_CHANNEL = 'https://www.youtube.com/@Nuwex';
const LATEST_VIDEO_ID = 'VqqlUKvXAmE';
const TIKTOK_PROFILE = 'https://www.tiktok.com/@nuwex10';
const TWITCH_CHANNEL = 'https://www.twitch.tv/nuwex9';
const DISCORD_SERVER = 'https://discord.gg/epUrWwW46G';

const YOUTUBE_VIDEOS = [
  { id: 'VqqlUKvXAmE', title: 'القرية الجميلة' },
  { id: '41aSqX_CkkI', title: 'كيف تصير افوى dps في اوفرواتش !! ( اقوى من يزن ) || overwatch 2' },
  { id: 'mtheVITG5iM', title: 'Content Warning | تصوير فلوقات رعب مع العيال' }
];

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const socialLinks = [
    { Icon: Icons.YouTube, href: YOUTUBE_CHANNEL, color: 'hover:text-[#FF0000]', external: true },
    { Icon: Icons.TikTok, href: TIKTOK_PROFILE, color: 'hover:text-white', external: true },
    { Icon: Icons.Discord, href: DISCORD_SERVER, color: 'hover:text-[#5865F2]', external: true },
    { Icon: Icons.Twitch, href: TWITCH_CHANNEL, color: 'hover:text-[#9146FF]', external: true }
  ];

  return (
    <main className="relative min-h-screen font-arabic" dir="rtl">
      <ParticlesBackground />
      
      {/* Hero Section */}
      <section className="flex min-h-screen items-center justify-center px-4 pt-16 bg-gradient-to-b from-black/40 to-transparent">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h1 className="mb-6 text-6xl font-bold sm:text-8xl font-arabic bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Nuwex
          </h1>
          <p className="mb-10 text-2xl text-gray-300 font-arabic">صانع محتوى قيمنق وستريمر</p>
          {isClient && (
            <motion.div 
              className="flex justify-center items-center gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {socialLinks.map(({ Icon, href, color, external }) => (
                <a
                  key={href}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className={`transform text-4xl text-white/90 transition-all duration-300 hover:scale-125 ${color} hover:shadow-lg hover:shadow-white/10`}
                >
                  <Icon />
                </a>
              ))}
            </motion.div>
          )}
        </motion.div>
      </section>

      {/* YouTube Section */}
      <section id="youtube" className="min-h-screen bg-gradient-to-b from-black/30 to-black/10 px-4 py-24">
        <motion.div 
          className="mx-auto max-w-6xl"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="mb-12 text-center text-5xl font-bold font-arabic bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            قناتي في اليوتيوب
          </h2>
          
          {/* Featured Video */}
          <div className="mb-16 aspect-video w-full overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
            {isClient && (
              <iframe
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${YOUTUBE_VIDEOS[0].id}`}
                title={YOUTUBE_VIDEOS[0].title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>

          {/* Latest Videos Grid */}
          <div className="mb-8 grid gap-6 md:grid-cols-3">
            {YOUTUBE_VIDEOS.map((video) => (
              <motion.div
                key={video.id}
                className="overflow-hidden rounded-xl bg-gray-800/40 shadow-xl ring-1 ring-white/10 backdrop-blur-sm transition-all duration-300 hover:ring-white/20"
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="aspect-video w-full">
                  {isClient && (
                    <iframe
                      className="h-full w-full"
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white text-right font-arabic">{video.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Subscribe Button */}
          <div className="text-center">
            <p className="mb-4 text-lg text-gray-300 font-arabic">
              اشترك بقناتي وخذلك فره على المقاطع الموجوده
            </p>
            <a
              href={YOUTUBE_CHANNEL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-gradient-to-r from-red-600 to-red-500 px-10 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/30 font-arabic text-lg"
            >
              اشترك في القناة
            </a>
          </div>
        </motion.div>
      </section>

      {/* TikTok Section */}
      <section id="tiktok" className="min-h-screen bg-gradient-to-b from-transparent to-black/30 px-4 py-24">
        <motion.div 
          className="mx-auto max-w-4xl"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="mb-12 text-center text-5xl font-bold font-arabic bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            تابعني في التيك توك
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {isClient && (
              <>
                <div className="overflow-hidden rounded-xl bg-gray-800/40 shadow-xl ring-1 ring-white/10 backdrop-blur-sm">
                  <blockquote 
                    className="tiktok-embed" 
                    cite={TIKTOK_PROFILE}
                    data-unique-id="nuwex10"
                    data-embed-type="creator"
                  >
                    <section>
                      <a target="_blank" href={TIKTOK_PROFILE}>@nuwex10</a>
                    </section>
                  </blockquote>
                  <script async src="https://www.tiktok.com/embed.js"></script>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="rounded-xl bg-gray-800/40 p-8 text-center backdrop-blur-sm ring-1 ring-white/10 transition-all duration-300 hover:ring-white/20">
                    {isClient && <Icons.TikTok className="mx-auto mb-6 text-7xl text-white" />}
                    <h3 className="mb-4 text-2xl font-bold font-arabic">تابعني في التيك توك</h3>
                    <p className="mb-8 text-lg text-gray-300 font-arabic">
                      محتوى يومي وكواليس وأشياء حلوة!
                    </p>
                    <a
                      href={TIKTOK_PROFILE}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block rounded-full bg-gradient-to-r from-[#FF2C55] to-[#FF405E] px-10 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#FF2C55]/30 font-arabic text-lg"
                    >
                      @nuwex10 تابعني
                    </a>
                  </div>
                </div>
              </>
            )}
          </div>
        </motion.div>
      </section>

      {/* Discord Section */}
      <section id="discord" className="min-h-screen bg-gradient-to-b from-black/30 to-transparent px-4 py-24">
        <motion.div 
          className="mx-auto max-w-4xl"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="mb-12 text-center text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            سيرفر الديسكورد حقي
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-xl bg-gray-800/40 p-8 text-center backdrop-blur-sm ring-1 ring-white/10 transition-all duration-300 hover:ring-white/20">
              {isClient && <Icons.Discord className="mx-auto mb-6 text-7xl text-indigo-400" />}
              <h3 className="mb-4 text-2xl font-bold">انضم للسيرفر</h3>
              <p className="mb-8 text-lg text-gray-300">
                كن جزء من مجتمعنا! تواصل مع الشباب،
                واحصل على التحديثات أول بأول، وشارك في الفعاليات الخاصة
              </p>
              <a
                href={DISCORD_SERVER}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-gradient-to-r from-indigo-600 to-indigo-500 px-10 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/30 text-lg"
              >
                ادخل السيرفر
              </a>
            </div>
            <div className="rounded-xl bg-gray-800/40 p-8 backdrop-blur-sm ring-1 ring-white/10">
              <h3 className="mb-6 text-center text-2xl font-bold">مميزات السيرفر</h3>
              <div className="space-y-6">
                <p className="text-lg text-gray-300">
                  وش بتحصل في السيرفر:
                </p>
                <ul className="list-inside list-disc space-y-4 text-lg text-gray-300 text-right">
                  <li className="transition-all duration-300 hover:text-white">إعلانات حصرية</li>
                  <li className="transition-all duration-300 hover:text-white">فعاليات جماعية</li>
                  <li className="transition-all duration-300 hover:text-white">رومات للنقاش عن الألعاب</li>
                  <li className="transition-all duration-300 hover:text-white">رومات صوتية</li>
                  <li className="transition-all duration-300 hover:text-white">تحديثات المحتوى</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Twitch Section */}
      <section id="twitch" className="min-h-screen bg-gradient-to-b from-black/30 to-transparent px-4 py-24">
        <motion.div 
          className="mx-auto max-w-6xl"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="mb-12 text-center text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            البث المباشر على تويتش
          </h2>
          <div className="mb-16 aspect-video w-full overflow-hidden rounded-xl shadow-2xl ring-1 ring-white/10">
            {isClient && (
              <iframe
                src={`https://player.twitch.tv/?channel=nuwex9&parent=${window.location.hostname}`}
                frameBorder="0"
                allowFullScreen
                scrolling="no"
                className="h-full w-full"
                title="Nuwex Twitch Stream"
              />
            )}
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-xl bg-gray-800/40 p-8 text-center backdrop-blur-sm ring-1 ring-white/10 transition-all duration-300 hover:ring-white/20">
              {isClient && <Icons.Twitch className="mx-auto mb-6 text-7xl text-purple-400" />}
              <h3 className="mb-4 text-2xl font-bold">تابع قناتي</h3>
              <p className="mb-8 text-lg text-gray-300">
                انضم للمجتمع وما يفوتك أي بث!
              </p>
              <a
                href={TWITCH_CHANNEL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-gradient-to-r from-purple-600 to-purple-500 px-10 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 text-lg"
              >
                تابعني على تويتش
              </a>
            </div>
            <div className="rounded-xl bg-gray-800/40 p-8 backdrop-blur-sm ring-1 ring-white/10">
              <h3 className="mb-6 text-center text-2xl font-bold">جدول البث</h3>
              <div className="space-y-6">
                <p className="text-lg text-gray-300">
                  وش تنتظر في البث:
                </p>
                <ul className="list-inside list-disc space-y-4 text-lg text-gray-300 text-right">
                  <li className="transition-all duration-300 hover:text-white">بث مباشر للألعاب</li>
                  <li className="transition-all duration-300 hover:text-white">لعب تفاعلي مع المشاهدين</li>
                  <li className="transition-all duration-300 hover:text-white">فعاليات جماعية</li>
                  <li className="transition-all duration-300 hover:text-white">تفاعل مع الشات</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
