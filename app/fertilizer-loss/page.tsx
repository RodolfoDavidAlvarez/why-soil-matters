import Link from 'next/link'

export default function FertilizerLoss() {
  return (
    <main className="min-h-screen bg-white">
      <article className="max-w-4xl mx-auto px-4 py-16">
        <Link href="/" className="text-green-600 hover:text-green-700 mb-8 inline-block">
          &larr; Back to all topics
        </Link>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
            Why 60% of Your Fertilizer Never Reaches Your Crops
          </h1>
          <p className="text-xl text-gray-600">
            The biological bridge is broken. Here's the science behind nutrient loss and how to fix it.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-green-900 mb-4">The 60% Problem</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you're spending thousands on fertilizer but not seeing the yield you expect, it's not the fertilizer.
              It's what happens in the 6 inches between application and root uptake.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Research shows that <strong>up to 60% of applied fertilizer never reaches plant roots in plant-available form</strong>.
              That's not just wasted moneyit's environmental contamination, groundwater pollution, and lost yield potential.
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
              <p className="text-lg font-semibold text-yellow-900 mb-2">The Real Cost</p>
              <p className="text-yellow-800">
                On a 100-acre operation spending $30,000/year on fertilizer, you're potentially losing $18,000 to
                inefficiency. Over 5 years, that's $90,000 in wasted inputs.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-green-900 mb-4">Why This Happens: The Biological Bridge</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The problem is biological. Here's what most fertilizer companies don't tell you:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
              <li>
                <strong>Soil microbes act as the bridge</strong> between fertilizer and plant roots. They break down complex
                nutrients into plant-available forms.
              </li>
              <li>
                <strong>Dead soil = broken bridge.</strong> Without active microbial populations, nutrients remain locked
                in forms plants can't use.
              </li>
              <li>
                <strong>Chemical-only farming kills microbes.</strong> Synthetic fertilizers temporarily boost yields but
                destroy the biological infrastructure needed for long-term productivity.
              </li>
              <li>
                <strong>The cycle compounds.</strong> Each season without biological activity makes the next season worse.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-green-900 mb-4">The Science: Nutrient Cycling</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Healthy soil contains 1-3 billion microorganisms per teaspoon. These organisms perform critical functions:
            </p>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-bold text-green-900 mb-2">Nitrogen Fixation</h3>
                <p className="text-gray-700 text-sm">
                  Bacteria convert atmospheric nitrogen into plant-usable forms. Without them, you're 100% dependent on expensive nitrogen inputs.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-bold text-green-900 mb-2">Phosphorus Solubilization</h3>
                <p className="text-gray-700 text-sm">
                  Fungi unlock bound phosphorus. Dead soil leaves 70-80% of phosphorus unavailable to plants.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-bold text-green-900 mb-2">Soil Structure</h3>
                <p className="text-gray-700 text-sm">
                  Fungal networks create aggregates that prevent nutrient leaching and improve water retention.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-bold text-green-900 mb-2">Disease Suppression</h3>
                <p className="text-gray-700 text-sm">
                  Beneficial microbes outcompete pathogens, reducing reliance on chemical pesticides.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-green-900 mb-4">The Solution: Rebuild Soil Biology</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You can't fix nutrient efficiency without fixing soil biology. Here's how:
            </p>
            <div className="space-y-6">
              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="font-bold text-green-900 mb-2">1. Apply Biological Inputs BEFORE Fertilizer</h3>
                <p className="text-gray-700">
                  Compost, vermicast, and microbial inoculants rebuild the biological bridge. Apply 2-4 weeks before
                  fertilizer to give microbes time to establish.
                </p>
              </div>
              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="font-bold text-green-900 mb-2">2. Reduce Synthetic Inputs Gradually</h3>
                <p className="text-gray-700">
                  Don't go cold turkey. Reduce synthetic fertilizer by 20-30% per year as soil biology improves.
                  Monitor yields to confirm biological systems are compensating.
                </p>
              </div>
              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="font-bold text-green-900 mb-2">3. Feed the Soil, Not the Plant</h3>
                <p className="text-gray-700">
                  Shift mindset from "fertilizing crops" to "feeding soil microbes." Organic matter provides carbon
                  that fuels microbial activity.
                </p>
              </div>
              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="font-bold text-green-900 mb-2">4. Monitor Biological Activity</h3>
                <p className="text-gray-700">
                  Use soil tests that measure microbial biomass, not just NPK. Active biology is the leading indicator
                  of nutrient efficiency.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-green-900 mb-4">Arizona Context: Why This Matters Here</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Arizona's unique challenges make biological soil health even more critical:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
              <li>
                <strong>Alkaline soils (pH 7.5-8.5)</strong> lock up phosphorus and micronutrients. Biological activity is
                essential for making these nutrients available.
              </li>
              <li>
                <strong>Low organic matter (&lt;1%)</strong> in desert soils means minimal natural microbial populations.
                You're starting from scratch.
              </li>
              <li>
                <strong>Extreme heat</strong> stresses soil biology. Summer temperatures above 110�F require protective strategies
                like mulching and shade.
              </li>
              <li>
                <strong>Water scarcity</strong> makes every input count. Biological systems improve water-use efficiency by 30-50%.
              </li>
            </ul>
          </section>

          <section className="mb-10 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-green-900 mb-4">The ROI: Real Numbers</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Growers who invest in soil biology see measurable returns:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">30-50%</div>
                <div className="text-sm text-gray-600">Reduction in fertilizer costs after 2-3 years</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">15-25%</div>
                <div className="text-sm text-gray-600">Yield increase from improved nutrient availability</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">40%</div>
                <div className="text-sm text-gray-600">Reduction in disease pressure and pesticide use</div>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-green-900 mb-4">Next Steps</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ready to stop wasting fertilizer and rebuild your soil's biological bridge?
            </p>
            <div className="bg-green-600 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Download Our Free Soil Biology Protocol</h3>
              <p className="mb-6">
                Get crop-specific guidelines for rebuilding soil biology, including application rates, timing, and
                monitoring strategies for Arizona conditions.
              </p>
              <a
                href="https://soilseedandwater.com/protocols"
                className="inline-block bg-white text-green-600 font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
              >
                Download Protocol (PDF)
              </a>
            </div>
          </section>

          <footer className="mt-16 pt-8 border-t border-gray-200">
            <p className="text-gray-600">
              Questions about implementing biological soil health on your operation?
              <a href="mailto:ralvarez@soilseedandwater.com" className="text-green-600 hover:underline ml-1">
                Contact us
              </a> for a free consultation.
            </p>
          </footer>
        </div>
      </article>
    </main>
  )
}
