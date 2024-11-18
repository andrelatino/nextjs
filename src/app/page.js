import Link from 'next/link'
import { posts } from '../data/posts'

export default function Home() {
  return (
    <main>
      <h1 className="text-4xl font-bold mb-8">My Blog</h1>
      <div className="post-grid">
        {posts.map((post) => (
          <Link href={`/posts/${post.slug}`} key={post.slug} className="post-card">
            <img src={post.image} alt={post.title} className="post-image" />
            <div className="post-content">
              <h2 className="post-title">{post.title}</h2>
              <p className="post-date">{post.date}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
