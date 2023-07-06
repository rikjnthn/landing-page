import ProductChoices from "@/components/ProductChoices"
import ProductHero from "@/components/ProductHero"

function product() {
  return (
    <main>
      <ProductHero />
      <ProductChoices />
    </main>
  )
}

export default product