import Link from "next/link"
import { storiesData } from "@/data/stories"
import Footer from "@/components/footer"

export default function Stories() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-chikara text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Stories from the <span className="text-primary">Mangroves</span>
          </h1>
          <p className="font-primary text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Discover the inspiring stories behind Project Bakawan.
          </p>
        </div>
      </section>

      {/* Stories Gallery */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {storiesData.map((story) => (
              <Link key={story.id} href={`/stories/${story.id}`}>
                <div className="relative group overflow-hidden rounded-2xl cursor-pointer">
                  <img
                    src={story.image || "/placeholder.svg"}
                    alt={story.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="inline-block px-2 py-1 bg-primary rounded-full text-xs font-medium mb-2">
                        {story.location}
                      </div>
                      <h3 className="font-semibold text-lg mb-1">{story.title}</h3>
                      <p className="text-sm opacity-90">{story.description}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Share Your Story</h2>
          <p className="text-lg mb-8 text-pretty leading-relaxed opacity-90">
            Have a mangrove conservation story to tell? We'd love to feature your experience and inspire others.
          </p>
          <button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors">
            Submit Your Story
          </button>
        </div>
      </section>
      <Footer />
    </div>
  )
}
