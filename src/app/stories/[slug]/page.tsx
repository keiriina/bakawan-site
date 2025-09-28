import Header from "@/components/header";
import Link from "next/link"
import { storiesData } from "@/data/stories"

export default function StoryPage({ params }: { params: { slug: string } }) {
    const story = storiesData.find((s) => s.id === params.slug)
    if (!story) {
    return (
        <div className="min-h-screen ...">
        <h1>Story not found</h1>
        <Link href="/stories"><button className="btn btn-soft">Back to Stories</button></Link>
        </div>
    )
    }
    return (
        <>
        <Header />
        <div className="min-h-screen bg-background">
      {/* Navigation */}
      <div className="navbar bg-base-100/80 backdrop-blur-sm border-b z-10 sticky top-0">
        <div className="navbar-start">
          <Link
            href="/stories"
            className="btn btn-ghost gap-2"
          >
            <i className="fa-solid fa-arrow-left"></i>
            Back to Stories
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="hero h-96" style={{ 
        backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.2)), url('${story.image}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="hero-overlay bg-opacity-0"></div>
        <div className="hero-content text-neutral-content p-0 items-end">
          <div className="max-w-4xl px-4 pb-12">
            <div className="badge badge-primary mb-4">
              {story.location}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{story.title}</h1>
            <p className="text-xl opacity-90">{story.description}</p>
          </div>
        </div>
      </section>

      {/* Story Meta */}
      <section className="py-8 border-b">
        <div className="max-w-4xl mx-auto px-4">
          <div className="join join-horizontal gap-4">
            <div className="badge badge-ghost gap-2">
              <i className="fa-solid fa-user"></i>
              {story.author}
            </div>
            <div className="badge badge-ghost gap-2">
              <i className="fa-solid fa-calendar"></i>
              {story.date}
            </div>
            <div className="badge badge-ghost gap-2">
              <i className="fa-solid fa-location-dot"></i>
              {story.location}
            </div>
          </div>
        </div>
      </section>

      {/* Story Content */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose">
            <p className="text-lg">{story.content.intro}</p>

            <div className="mockup-code my-8 bg-neutral text-neutral-content p-6">
              <p className="italic text-lg">"{story.content.quote}"</p>
              <p className="text-sm mt-2">— {story.content.quoteAuthor}</p>
            </div>

            <div className="my-8">
              <h3 className="text-xl font-bold mb-4">Key Achievements</h3>
              <ul className="menu bg-base-200 w-full rounded-box">
                {story.content.details.map((detail, index) => (
                  <li key={index}>
                    <a className="text-base">
                      <i className="fa-solid fa-check text-success"></i>
                      {detail}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-lg">{story.content.impact}</p>
          </div>
        </div>
      </article>

      {/* Related Stories */}
      <section className="py-16 bg-base-200">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">More Stories</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {storiesData
              .filter((s) => s.id !== params.slug)
              .slice(0, 3)
              .map((relatedStory) => (
                <Link key={relatedStory.id} href={`/stories/${relatedStory.id}`}>
                  <div className="card bg-base-100 shadow-xl image-full">
                    <figure>
                      <img
                        src={relatedStory.image || "/placeholder.svg"}
                        alt={relatedStory.title}
                      />
                    </figure>
                    <div className="card-body justify-end">
                      <div className="card-actions justify-start">
                        <div className="badge badge-primary">
                          {relatedStory.location}
                        </div>
                      </div>
                      <h3 className="card-title text-white">{relatedStory.title}</h3>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
        </>
    );
}