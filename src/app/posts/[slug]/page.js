import { posts } from '../../../data/posts'

export default function Post({ params }) {
  const post = posts.find(p => p.slug === params.slug)
  
  if (!post) return <div>Post not found</div>

  return (
    <article className="max-w-2xl mx-auto">
      <img src={post.image} alt={post.title} className="w-full h-[400px] object-cover rounded-lg mb-8" />
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600 mb-8">{post.date}</p>
      <div className="prose" dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  )
}
