import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function Hero() {
  return (
    // 1. 【核心修改】添加 Flexbox 垂直居中类和最小高度。
    //    min-h-[calc(100vh-64px)] 假设 Header 的高度大约为 64px (h-16)，
    //    这样 Hero 组件就能占据屏幕剩余的高度，并居中其内容。
    <section className="container relative flex items-center justify-center min-h-[calc(100vh-64px)]">
      
      {/* 2. 【修复不对称】调整两个香蕉图标的定位类，使其对称。 */}
      <div
        // 调整 top-20 为 top-24
        className="absolute top-24 left-10 text-6xl opacity-20 animate-bounce" 
        style={{ animationDelay: "0s", animationDuration: "3s" }}
      >
        🍌
      </div>
      <div
        // 调整 top-40 为 top-24，调整 right-16 为 right-10（使其更对称）
        className="absolute top-24 right-10 text-5xl opacity-20 animate-bounce" 
        style={{ animationDelay: "1s", animationDuration: "4s" }}
      >
        🍌
      </div>

      <div className="mx-auto max-w-4xl text-center relative z-10">
        <Badge variant="secondary" className="mb-6 px-4 py-1.5">
          <span className="text-xs font-medium">🚀 The AI model that outperforms competitors</span>
        </Badge>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-balance">Nano Banana</h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance leading-relaxed max-w-3xl mx-auto">
          Transform any image with simple text prompts. Nano-banana's advanced model delivers consistent character
          editing and scene preservation that surpasses competitors. Experience the future of AI image editing.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8">
            Start Editing
          </Button>
          <Button size="lg" variant="outline" className="text-base px-8 bg-transparent">
            View Examples
          </Button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="text-lg">⚡</span>
            <span>One-shot editing</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg">🖼️</span>
            <span>Multi-image support</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg">💬</span>
            <span>Natural language</span>
          </div>
        </div>
      </div>
    </section>
  )
}