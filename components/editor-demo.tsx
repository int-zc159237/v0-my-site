"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Upload, Sparkles } from "lucide-react"
import { useState } from "react"

export function EditorDemo() {
  const [prompt, setPrompt] = useState("")
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <section className="container py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Try The AI Editor</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
          Experience the power of nano-banana's natural language image editing. Transform any photo with simple text
          commands
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Input Panel */}
        <Card className="border-2 border-primary/20">
          <CardContent className="p-6">
            <div className="space-y-6">
              <div>
                <Label htmlFor="image-upload" className="text-base font-semibold mb-3 block">
                  <Upload className="inline-block w-4 h-4 mr-2" />
                  Reference Image
                </Label>
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                  <input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                  />
                  <label htmlFor="image-upload" className="cursor-pointer">
                    {uploadedImage ? (
                      <img
                        src={uploadedImage || "/placeholder.svg"}
                        alt="Uploaded"
                        className="max-h-48 mx-auto rounded-lg"
                      />
                    ) : (
                      <>
                        <Upload className="w-12 h-12 mx-auto mb-3 text-muted-foreground" />
                        <p className="text-sm text-muted-foreground mb-1">Click to upload or drag and drop</p>
                        <p className="text-xs text-muted-foreground">Max 50MB • PNG, JPG, WEBP</p>
                      </>
                    )}
                  </label>
                </div>
              </div>

              <div>
                <Label htmlFor="prompt" className="text-base font-semibold mb-3 block">
                  <Sparkles className="inline-block w-4 h-4 mr-2" />
                  Prompt
                </Label>
                <Textarea
                  id="prompt"
                  placeholder="Describe what you want to change... e.g., 'Change the background to a beach sunset' or 'Make the person wear a red jacket'"
                  className="min-h-32 resize-none"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                />
                <p className="text-xs text-muted-foreground mt-2">
                  Use natural language to describe your desired edits
                </p>
              </div>

              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90" size="lg">
                <Sparkles className="w-4 h-4 mr-2" />
                Generate Now
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Output Panel */}
        <Card className="border-2 border-primary/20">
          <CardContent className="p-6">
            <div className="space-y-4">
              <Label className="text-base font-semibold">Output Gallery</Label>
              <div className="border-2 border-dashed border-border rounded-lg p-12 flex flex-col items-center justify-center min-h-[400px] bg-muted/30">
                <div className="text-6xl mb-4 opacity-20">🖼️</div>
                <p className="text-center text-muted-foreground mb-2 font-medium">Ready for instant generation</p>
                <p className="text-center text-sm text-muted-foreground">
                  Upload an image and enter your prompt to see the magic
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
