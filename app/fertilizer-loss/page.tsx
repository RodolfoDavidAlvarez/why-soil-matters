import Link from 'next/link'

export default function FertilizerLoss() {
  return (
    <main className="min-h-screen">
      <article className="max-w-3xl mx-auto px-6 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-stone-600 hover:text-[#264027] mb-12 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </Link>

        <header className="mb-16">
          <h1 className="text-5xl md:text-6xl mb-6 text-stone-900 leading-tight">
            Why 60% of Your Fertilizer Never Reaches Your Crops
          </h1>
          <p className="text-xl text-stone-600 leading-relaxed">
            The biological bridge is broken. Here's the science behind nutrient loss and how to fix it.
          </p>
        </header>

        <div className="prose-custom">
          <p>
            If you're spending thousands on fertilizer but not seeing the yield you expect, it's not the fertilizer.
            It's what happens in the 6 inches between application and root uptake.
          </p>

          <p>
            Research shows that <strong>up to 60% of applied fertilizer never reaches plant roots in plant-available form</strong>.
            That's not just wasted money—it's environmental contamination, groundwater pollution, and lost yield potential.
          </p>

          <div className="callout">
            <div className="callout-title">The Real Cost</div>
            <p style={{marginBottom: 0}}>
              On a 100-acre operation spending $30,000/year on fertilizer, you're potentially losing $18,000 to
              inefficiency. Over 5 years, that's $90,000 in wasted inputs.
            </p>
          </div>

          <h2>The Biological Bridge</h2>

          <p>
            The problem is biological. Here's what most fertilizer companies don't tell you:
          </p>

          <ul>
            <li><strong>Soil microbes act as the bridge</strong> between fertilizer and plant roots. They break down complex nutrients into plant-available forms.</li>
            <li><strong>Dead soil = broken bridge.</strong> Without active microbial populations, nutrients remain locked in forms plants can't use.</li>
            <li><strong>Chemical-only farming kills microbes.</strong> Synthetic fertilizers temporarily boost yields but destroy the biological infrastructure needed for long-term productivity.</li>
            <li><strong>The cycle compounds.</strong> Each season without biological activity makes the next season worse.</li>
          </ul>

          <h2>How Soil Microbes Work</h2>

          <p>
            Healthy soil contains 1-3 billion microorganisms per teaspoon. These organisms perform critical functions:
          </p>

          <p>
            <strong>Nitrogen Fixation:</strong> Bacteria convert atmospheric nitrogen into plant-usable forms. Without them, you're 100% dependent on expensive nitrogen inputs.
          </p>

          <p>
            <strong>Phosphorus Solubilization:</strong> Fungi unlock bound phosphorus. Dead soil leaves 70-80% of phosphorus unavailable to plants.
          </p>

          <p>
            <strong>Soil Structure:</strong> Fungal networks create aggregates that prevent nutrient leaching and improve water retention.
          </p>

          <p>
            <strong>Disease Suppression:</strong> Beneficial microbes outcompete pathogens, reducing reliance on chemical pesticides.
          </p>

          <h2>The Solution</h2>

          <p>
            You can't fix nutrient efficiency without fixing soil biology. Here's how:
          </p>

          <p>
            <strong>1. Apply Biological Inputs BEFORE Fertilizer</strong><br/>
            Compost, vermicast, and microbial inoculants rebuild the biological bridge. Apply 2-4 weeks before fertilizer to give microbes time to establish.
          </p>

          <p>
            <strong>2. Reduce Synthetic Inputs Gradually</strong><br/>
            Don't go cold turkey. Reduce synthetic fertilizer by 20-30% per year as soil biology improves. Monitor yields to confirm biological systems are compensating.
          </p>

          <p>
            <strong>3. Feed the Soil, Not the Plant</strong><br/>
            Shift mindset from "fertilizing crops" to "feeding soil microbes." Organic matter provides carbon that fuels microbial activity.
          </p>

          <p>
            <strong>4. Monitor Biological Activity</strong><br/>
            Use soil tests that measure microbial biomass, not just NPK. Active biology is the leading indicator of nutrient efficiency.
          </p>

          <h2>Arizona Context</h2>

          <p>
            Arizona's unique challenges make biological soil health even more critical:
          </p>

          <ul>
            <li><strong>Alkaline soils (pH 7.5-8.5)</strong> lock up phosphorus and micronutrients. Biological activity is essential for making these nutrients available.</li>
            <li><strong>Low organic matter (&lt;1%)</strong> in desert soils means minimal natural microbial populations. You're starting from scratch.</li>
            <li><strong>Extreme heat</strong> stresses soil biology. Summer temperatures above 110°F require protective strategies like mulching and shade.</li>
            <li><strong>Water scarcity</strong> makes every input count. Biological systems improve water-use efficiency by 30-50%.</li>
          </ul>

          <h2>The ROI</h2>

          <p>
            Growers who invest in soil biology see measurable returns:
          </p>

          <ul>
            <li><strong>30-50%</strong> reduction in fertilizer costs after 2-3 years</li>
            <li><strong>15-25%</strong> yield increase from improved nutrient availability</li>
            <li><strong>40%</strong> reduction in disease pressure and pesticide use</li>
          </ul>

          <div className="cta-box">
            <h3>Download Our Free Soil Biology Protocol</h3>
            <p>
              Get crop-specific guidelines for rebuilding soil biology, including application rates, timing, and
              monitoring strategies for Arizona conditions.
            </p>
            <a href="https://soilseedandwater.com/protocols" className="cta-button">
              Download Protocol (PDF)
            </a>
          </div>

          <p style={{fontSize: '0.9375rem', color: '#78716c', borderTop: '1px solid #e7e5e4', paddingTop: '2rem', marginTop: '3rem'}}>
            Questions about implementing biological soil health on your operation?{' '}
            <a href="mailto:ralvarez@soilseedandwater.com">Contact us</a> for a free consultation.
          </p>
        </div>
      </article>
    </main>
  )
}
