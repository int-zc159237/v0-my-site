import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { EditorDemo } from "@/components/editor-demo"
import { Showcase } from "@/components/showcase"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* 关键修改应在 Hero 组件内部完成 */}
        <Hero /> 
        <Features />
        <EditorDemo />
        <Showcase />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}