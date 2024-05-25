import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'

import Image from '@/components/Image'
import CustomLink from '@/components/Link'
import NewsletterForm from '@/components/NewsletterForm'
import { BriefcaseIcon, EnvelopeIcon, LinkIcon, MapPinIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import Tilt from 'react-parallax-tilt'
import TypewriterComponent from 'typewriter-effect'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}
function RightIntroCard() {
  return (
    <motion.div
      initial={{ x: '100px', opacity: 0.4 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          type: 'spring',
        },
      }}
      exit={{
        x: '100px',
        opacity: 0.4,
        transition: {
          type: 'tween',
        },
      }}
    >
      <Tilt>
        <section className="container mx-auto hidden max-w-[340px] transform rounded duration-500 lg:block">
          <div className="group relative">
            <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-discord-darkTheme/60 to-discord-darkTheme/70 opacity-10 blur transition duration-1000 group-hover:opacity-20 group-hover:duration-200 dark:opacity-75 dark:group-hover:opacity-100"></div>
            <section className="my-card-theme relative mx-auto flex max-w-sm flex-col rounded-lg shadow-lg">
              <div>
                <Image
                  className="h-auto w-auto rounded-lg object-cover"
                  width="340"
                  height="270"
                  // src="/static/images/me.jpg"
                  src="/static/images/me_cartoon.png"
                  // src="https://weandthecolor.com/wp-content/uploads/2012/03/Alternate-Ending-Illustration-by-Matheus-Lopes-3454646.jpg"
                  alt="DucHuy's Profile Picture"
                  priority
                />
              </div>
              <div className="my-card-theme my-auto space-y-3  p-7 pb-10">
                <h1 className="my-title-theme text-2xl font-bold">Luong Duc Huy</h1>
                <h2 className="my-p-theme text-sm font-semibold">Learner | Builder</h2>
                <ul className="flex flex-col space-y-4 pt-4 text-sm">
                  <li className="flex items-center space-x-2">
                    <span>
                      <BriefcaseIcon className="my-icon-theme" />
                    </span>
                    <span className=" dark:text-discord-darkTheme-light/90">
                      Self-employed - building products
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span>
                      <MapPinIcon className="my-icon-theme" />
                    </span>
                    <span className=" dark:text-discord-darkTheme-light/90">HCMC, VietNam</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span>
                      <EnvelopeIcon className="my-icon-theme" />
                    </span>
                    <span className=" dark:text-discord-darkTheme-light/90">
                      luongduchuy11b1@gmail.com
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span>
                      <LinkIcon className="my-icon-theme" />
                    </span>
                    <span className=" dark:text-discord-darkTheme-light/90">
                      <CustomLink
                        hasAnimation={false}
                        className="hover:underline"
                        href="https://github.com/onggiabayluon"
                      >
                        Github
                      </CustomLink>
                      {', '}
                      <CustomLink
                        hasAnimation={false}
                        className="hover:underline"
                        href="https://www.linkedin.com/in/ducchuy/"
                      >
                        LinkedIn
                      </CustomLink>
                    </span>
                  </li>
                </ul>
              </div>
              <span className="h-1.5 rounded-br-xl rounded-bl-xl  bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
            </section>
          </div>
        </section>
      </Tilt>
    </motion.div>
  )
}

function LeftDescription() {
  return (
    <motion.div
      initial={{ x: '-100px', opacity: 0.4 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          type: 'spring',
        },
      }}
      exit={{
        x: '-100px',
        opacity: 0.4,
        transition: {
          type: 'tween',
        },
      }}
    >
      <div className="xl:pr-28">
        {/* Left Sessions */}
        <h1 className="my-title-theme mb-12 text-3xl font-extrabold leading-9 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Howdy, fellow!
          <span className="ml-5">
            <Image
              className="wave h-auto w-auto"
              width="50"
              height="50"
              src="/static/images/wave.svg"
              alt="wave icon"
            />
          </span>
        </h1>

        <div className="text-lg">
          <div className="my-title-theme mb-4 font-medium leading-7">
            <p>
              I'm <b>Duc Huy Luong</b> - an open-minded <b>Software Engineer</b> in VietNam
            </p>
            <TypewriterComponent
              options={{
                strings: [
                  'I love web development',
                  "I'm alias Huy at work",
                  'I live in Ho Chi Minh City, VietNam',
                  "I'm a dog person 🌭🐕",
                  'I love reading comics 📚',
                ],
                autoStart: true,
                loop: true,
                delay: 0,
              }}
            />
          </div>
          <p className="text-md my-p-theme prose">
            I started my coding journey in 2019 with C++/Python/Javascript in college.
            <br />
            I'm in love with the JS ecosystem, web dev, and eCommerce.
            <br />
            I'm writing this blog to note down and share what I've learned as a SE.
          </p>
          <ul className="my-p-theme mt-8 space-y-2 text-lg font-medium">
            <motion.li
              whileHover={{ scale: 1.2, originX: 0 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <CustomLink hasAnimation={false} href="/projects">
                🧱 <span className="hover:underline">What have I built?</span>
              </CustomLink>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.2, originX: 0 }}
              transition={{ style: 'spring', stiffness: 300 }}
            >
              <CustomLink hasAnimation={false} href="/about">
                😀 <span className="hover:underline">More about me</span>
              </CustomLink>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.2, originX: 0 }}
              transition={{ style: 'spring', stiffness: 300 }}
            >
              <CustomLink hasAnimation={false} href="/static/CV_DucHuy_Luong_Fullstack_en_v1.pdf">
                💼 <span className="hover:underline">My resume</span>
              </CustomLink>
            </motion.li>
          </ul>
          <p className="my-title-theme mt-8 text-lg">
            Happy reading <span className="text-2xl">🍻</span>
          </p>
        </div>
      </div>
    </motion.div>
  )
}

function Introduction() {
  return (
    <div className="space-y-2 pt-6 pb-8 md:space-y-5">
      <div className="flex flex-row justify-between">
        <LeftDescription />
        <RightIntroCard />
      </div>
    </div>
  )
}

function CustomTransition({ MotionElement, variants, children, className }) {
  return (
    <MotionElement
      variants={variants}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </MotionElement>
  )
}
function Posts({ posts }) {
  const showVariants = {
    initial: {
      opacity: 0,
      y: '50px',
    },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeIn' },
    },
  }
  return (
    <ul className="divide-y divide-gray-200 dark:divide-gray-700">
      {!posts.length && 'No posts found.'}
      {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
        const { slug, date, title, summary, tags } = frontMatter
        return (
          <CustomTransition
            MotionElement={motion.li}
            variants={showVariants}
            key={slug}
            className="py-12"
          >
            <article>
              <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                <dl>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    <time dateTime={date}>{formatDate(date)}</time>
                  </dd>
                </dl>
                <div className="space-y-5 xl:col-span-3">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold leading-8 tracking-tight">
                        <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
                          {title}
                        </Link>
                      </h2>
                      <div className="flex flex-wrap">
                        {tags.map((tag) => (
                          <Tag key={tag} text={tag} />
                        ))}
                      </div>
                    </div>
                    <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                      {summary}
                    </div>
                  </div>
                  <div className="text-base font-medium leading-6">
                    <Link
                      href={`/blog/${slug}`}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                      aria-label={`Read "${title}"`}
                    >
                      Read more &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </CustomTransition>
        )
      })}
    </ul>
  )
}

export default function Home({ posts }) {
  const scrollRef = useRef(null)

  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div ref={scrollRef} className="divide-y divide-gray-200 dark:divide-gray-700">
        <Introduction />
        <Posts posts={posts} />
      </div>

      {/* More Post Button */}
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
