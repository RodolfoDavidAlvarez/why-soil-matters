import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <header className="mb-20">
          <h1 className="text-6xl md:text-7xl mb-6 text-stone-900">
            Why Soil Matters
          </h1>
          <p className="text-xl text-stone-600 max-w-2xl leading-relaxed">
            Understanding the biological foundation of regenerative agriculture in Arizona
          </p>
        </header>

        <div className="space-y-1">
          {topics.map((topic, index) => (
            <Link
              key={topic.slug}
              href={`/${topic.slug}`}
              className="group block border-t border-stone-200 py-8 hover:bg-stone-50 transition-colors"
            >
              <div className="flex items-start justify-between gap-8">
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl mb-3 text-stone-900 group-hover:text-[#264027] transition-colors">
                    {topic.title}
                  </h2>
                  <p className="text-stone-600 leading-relaxed">
                    {topic.preview}
                  </p>
                </div>
                <div className="hidden md:flex items-center text-stone-400 group-hover:text-[#264027] transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
          <div className="border-t border-stone-200"></div>
        </div>

        <footer className="mt-20 pt-12 border-t border-stone-200 text-center text-stone-500">
          <p>
            A resource by{' '}
            <a
              href="https://soilseedandwater.com"
              className="text-[#264027] hover:underline"
            >
              Soil Seed & Water
            </a>
          </p>
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
