import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-green-900 mb-4">
            Why Soil Matters
          </h1>
          <p className="text-xl text-green-700 max-w-2xl mx-auto">
            Understanding the biological foundation of regenerative agriculture in Arizona
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {topics.map((topic) => (
            <Link
              key={topic.slug}
              href={`/${topic.slug}`}
              className="group bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-4 border-green-600"
            >
              <h2 className="text-xl font-bold text-green-900 mb-2 group-hover:text-green-700">
                {topic.title}
              </h2>
              <p className="text-gray-600 text-sm mb-4">{topic.preview}</p>
              <span className="text-green-600 text-sm font-semibold">
                Read more →
              </span>
            </Link>
          ))}
        </div>

        <footer className="mt-16 text-center text-gray-600">
          <p>A resource by <a href="https://soilseedandwater.com" className="text-green-600 hover:underline">Soil Seed & Water</a></p>
        </footer>
      </div>
    </main>
  )
}

const topics = [
  {
    slug: 'fertilizer-loss',
    title: 'Why 60% of Your Fertilizer Never Reaches Your Crops',
    preview: 'The biological bridge is broken. Here\'s the science behind nutrient loss and how to fix it.'
  },
  {
    slug: 'usda-composting-bet',
    title: 'The Composting Secret That Just Won a $700 Million Bet',
    preview: 'What 3,000 composters at COMPOST2026 know that most farmers don\'t.'
  },
  {
    slug: 'dead-soil-water',
    title: 'Dead Soil Can\'t Hold Water',
    preview: 'Arizona\'s water crisis isn\'t just about rain. It\'s about what\'s happening 6 inches underground.'
  },
  {
    slug: 'gcu-garden-program',
    title: 'The Free GCU Program Teaching Phoenix How to Grow Food',
    preview: '500+ residents are learning regenerative gardening. Here\'s what they\'re discovering.'
  },
  {
    slug: 'compost-math',
    title: 'One Inch of Compost. 20,000 Gallons of Water Saved.',
    preview: 'The math behind compost that changes everything for Arizona growers.'
  },
  {
    slug: 'heat-soil-biology',
    title: '115°F and Your Soil is Dying',
    preview: 'Summer heat kills more than plants. Here\'s how to protect your soil biology.'
  }
]
