import { MDXLayoutRenderer } from '@/components/MDXComponents'
import PageTitle from '@/components/PageTitle'
import Transition from '@/components/Transition'
import generateRss from '@/lib/generate-rss'
import { formatSlug, getAllFilesFrontMatter, getFileBySlug, getFiles } from '@/lib/mdx'
import fs from 'fs'

const DEFAULT_LAYOUT = 'PostLayout'

export async function getStaticPaths() {
  const posts = getFiles('blog')
  return {
    paths: posts.map((p) => ({
      params: {
        slug: formatSlug(p).split('/'),
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  try {
    const allPosts = await getAllFilesFrontMatter('blog')
    const postIndex = allPosts.findIndex((post) => formatSlug(post.slug) === params.slug.join('/'))
    const prev = allPosts[postIndex + 1] || null
    const next = allPosts[postIndex - 1] || null
    const post = await getFileBySlug('blog', params.slug.join('/'))
    const authorList = post.frontMatter.authors || ['default']
    const authorPromise = authorList.map(async (author) => {
      const authorResults = await getFileBySlug('authors', [author])
      return authorResults.frontMatter
    })
    const authorDetails = await Promise.all(authorPromise)

    // rss
    if (allPosts.length > 0) {
      const rss = generateRss(allPosts)
      fs.writeFileSync('./public/feed.xml', rss)
    }

    return { props: { post, authorDetails, prev, next } }
  } catch (error) {
    console.log(error)
  }
}

export default function Blog({ post, authorDetails, prev, next }) {
  const { mdxSource, toc, frontMatter } = post

  return (
    <Transition>
      {frontMatter.draft !== true ? (
        <MDXLayoutRenderer
          layout={frontMatter.layout || DEFAULT_LAYOUT}
          toc={toc}
          mdxSource={mdxSource}
          frontMatter={frontMatter}
          authorDetails={authorDetails}
          prev={prev}
          next={next}
        />
      ) : (
        <div className="mt-24 text-center">
          <PageTitle>
            Under Construction{' '}
            <span role="img" aria-label="roadwork sign">
              🚧
            </span>
          </PageTitle>
        </div>
      )}
    </Transition>
  )
}