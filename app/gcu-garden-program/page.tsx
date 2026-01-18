import Link from 'next/link'

export default function GCUGardenProgram() {
  return (
    <main className="min-h-screen bg-white">
      <article className="max-w-4xl mx-auto px-4 py-16">
        <Link href="/" className="text-green-600 hover:text-green-700 mb-8 inline-block">
          &larr; Back to all topics
        </Link>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
            The Free GCU Program That's Teaching Phoenix How to Grow Food
          </h1>
          <p className="text-xl text-gray-600">
            500+ residents are learning regenerative gardening. Here's what they're discovering.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-green-900 mb-4">Every Saturday at GCU</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Something unusual is happening at Grand Canyon University every Saturday morning.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Hundreds of Phoenix residents—most with zero farming experience—are learning to grow food using
              regenerative practices. The program is completely free. The results are transforming how people think about food.
            </p>
            <div className="bg-green-50 border-l-4 border-green-600 p-6 my-8">
              <p className="text-lg font-semibold text-green-900 mb-2">United Food & Environmental Programs (UFE)</p>
              <p className="text-green-800">
                UFE's mission is simple: teach people where food comes from, how to grow it, and why soil health matters.
                The GCU garden classes are part of a larger movement to reconnect communities with regenerative agriculture.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-green-900 mb-4">What Students Are Learning</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The curriculum goes beyond basic gardening. It's regenerative agriculture education:
            </p>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-green-900 mb-2">Soil Biology Basics</h3>
                <ul className="text-gray-700 text-sm space-y-2">
                  <li>• How microbes feed plants</li>
                  <li>• Why compost works (and synthetic fertilizer doesn't)</li>
                  <li>• Building living soil from scratch</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-green-900 mb-2">Composting</h3>
                <ul className="text-gray-700 text-sm space-y-2">
                  <li>• Turning kitchen scraps into soil</li>
                  <li>• Hot vs. cold composting methods</li>
                  <li>• Troubleshooting common problems</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-green-900 mb-2">Water Conservation</h3>
                <ul className="text-gray-700 text-sm space-y-2">
                  <li>• Drip irrigation setup</li>
                  <li>• Mulching to reduce evaporation</li>
                  <li>• Desert-adapted crop selection</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-green-900 mb-2">Crop Planning</h3>
                <ul className="text-gray-700 text-sm space-y-2">
                  <li>• What grows well in Arizona</li>
                  <li>• Seasonal planting calendars</li>
                  <li>• Succession planting for continuous harvest</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-green-900 mb-4">Why Regenerative Practices Work Better in Arizona</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Arizona's extreme climate makes conventional gardening difficult. Regenerative practices are actually better suited for desert conditions:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
              <li>
                <strong>Heat tolerance:</strong> Compost-rich soil stays 5-10°F cooler, protecting plant roots
              </li>
              <li>
                <strong>Water efficiency:</strong> Living soil holds moisture longer, reducing daily watering needs
              </li>
              <li>
                <strong>Pest resistance:</strong> Healthy plants grown in biological soil resist pests better than fertilizer-dependent plants
              </li>
              <li>
                <strong>Year-round production:</strong> Arizona has 300+ days of sun—with proper soil, you can grow food 12 months
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-green-900 mb-4">The UFE Philosophy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              UFE's approach is rooted in education, not charity:
            </p>
            <div className="space-y-6">
              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="font-bold text-green-900 mb-2">Food Security Through Knowledge</h3>
                <p className="text-gray-700">
                  Teaching someone to grow food is more valuable than giving them food. The skills last forever.
                </p>
              </div>
              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="font-bold text-green-900 mb-2">Youth Education Priority</h3>
                <p className="text-gray-700">
                  UFE believes kids should understand where food comes from. School programs teach students to
                  grow, cook, and value real food.
                </p>
              </div>
              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="font-bold text-green-900 mb-2">Community Building</h3>
                <p className="text-gray-700">
                  The GCU garden is a gathering place. People from different backgrounds work together, share harvests,
                  and build relationships around food.
                </p>
              </div>
              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="font-bold text-green-900 mb-2">Environmental Stewardship</h3>
                <p className="text-gray-700">
                  Every compost bin is waste diverted from landfills. Every garden is habitat for pollinators.
                  Regenerative practices heal the land.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10 bg-yellow-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-yellow-900 mb-4">What Students Are Saying</h2>
            <div className="space-y-6">
              <blockquote className="border-l-4 border-yellow-500 pl-6 text-gray-700 italic">
                "I thought gardening in Phoenix was impossible. After 8 weeks, I'm growing tomatoes, peppers,
                and herbs year-round. The secret was soil biology—something I never learned in school."
                <footer className="text-sm text-gray-600 mt-2 not-italic">— Maria, Phoenix resident</footer>
              </blockquote>
              <blockquote className="border-l-4 border-yellow-500 pl-6 text-gray-700 italic">
                "My kids now ask where their food comes from. They want to help in the garden. That's more valuable
                than anything I could buy them."
                <footer className="text-sm text-gray-600 mt-2 not-italic">— James, parent of two</footer>
              </blockquote>
              <blockquote className="border-l-4 border-yellow-500 pl-6 text-gray-700 italic">
                "I've saved hundreds on groceries and my family is eating healthier. Plus, my water bill went down
                because the compost-rich soil needs less irrigation."
                <footer className="text-sm text-gray-600 mt-2 not-italic">— Lisa, urban gardener</footer>
              </blockquote>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-green-900 mb-4">Earth Day 2026: Special Workshop Series</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Starting April 5th (Earth Day weekend), UFE is hosting a special 4-week intensive on regenerative gardening:
            </p>
            <div className="space-y-4">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-green-900 mb-2">Week 1: Soil Building</h3>
                <p className="text-gray-700 text-sm">
                  Build your first compost bin, learn to test soil health, and prepare beds for planting
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-green-900 mb-2">Week 2: Water Systems</h3>
                <p className="text-gray-700 text-sm">
                  Install drip irrigation, set up rain catchment, and learn mulching techniques
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-green-900 mb-2">Week 3: Planting & Succession</h3>
                <p className="text-gray-700 text-sm">
                  Plant spring crops, learn succession planting, and plan for summer/fall harvests
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-green-900 mb-2">Week 4: Pest Management & Harvest</h3>
                <p className="text-gray-700 text-sm">
                  Natural pest control, beneficial insects, and harvesting/storage techniques
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-green-900 mb-4">How to Get Involved</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              UFE programs are free and open to all Phoenix-area residents:
            </p>
            <div className="bg-green-600 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Register for Free Garden Classes</h3>
              <p className="mb-6">
                Saturday classes at GCU start April 5th. Space is limited—register early to secure your spot.
              </p>
              <div className="space-y-4">
                <div>
                  <strong>When:</strong> Saturdays 9:00 AM - 12:00 PM
                </div>
                <div>
                  <strong>Where:</strong> GCU Community Garden, 3300 W Camelback Rd, Phoenix
                </div>
                <div>
                  <strong>Cost:</strong> FREE (materials provided)
                </div>
              </div>
              <a
                href="https://unitedfood.org/garden-classes"
                className="inline-block bg-white text-green-600 font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition mt-6"
              >
                Register Now
              </a>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-green-900 mb-4">Partnership: Soil Seed & Water + UFE</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Soil Seed & Water supplies the biological soil amendments used in UFE programs:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
              <li>
                <strong>Vermicast:</strong> High-biology worm compost for seed starting and transplanting
              </li>
              <li>
                <strong>Compost blends:</strong> Custom mixes for Arizona soil conditions
              </li>
              <li>
                <strong>Microbial inoculants:</strong> Boost beneficial bacteria and fungi
              </li>
              <li>
                <strong>Educational support:</strong> Soil biology workshops and consulting
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Students who graduate from UFE classes can purchase the same products used in the program at wholesale
              pricing to continue their regenerative journey at home.
            </p>
          </section>

          <footer className="mt-16 pt-8 border-t border-gray-200">
            <p className="text-gray-600">
              Want to bring regenerative gardening education to your school or community?
              <a href="mailto:ralvarez@soilseedandwater.com" className="text-green-600 hover:underline ml-1">
                Contact us
              </a> about partnership opportunities.
            </p>
          </footer>
        </div>
      </article>
    </main>
  )
}
