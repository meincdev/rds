import type { Metadata } from 'next'
import { CodeBlock, PropsTable } from '@/app/components/code-block'

export const metadata: Metadata = {
  title: 'Carousel',
  description: 'A slideshow component built on Embla Carousel.',
}

export default function CarouselPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Carousel</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          A slideshow component built on Embla Carousel.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Installation</h2>
        <CodeBlock language="bash">{`npx shadcn@latest add carousel
npm install embla-carousel-react`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Import</h2>
        <CodeBlock>{`import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Basic</h2>
        <CodeBlock>{`<Carousel className="w-full max-w-sm">
  <CarouselContent>
    {Array.from({ length: 5 }).map((_, i) => (
      <CarouselItem key={i}>
        <div className="p-1">
          <Card>
            <CardContent className="flex aspect-square items-center justify-center p-6">
              <span className="text-4xl font-semibold">{i + 1}</span>
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Multiple visible items</h2>
        <CodeBlock>{`<Carousel opts={{ align: "start" }} className="w-full max-w-sm">
  <CarouselContent className="-ml-1">
    {Array.from({ length: 5 }).map((_, i) => (
      <CarouselItem key={i} className="pl-1 md:basis-1/2 lg:basis-1/3">
        <div className="p-1">
          <Card>
            <CardContent className="flex aspect-square items-center justify-center p-6">
              <span className="text-2xl font-semibold">{i + 1}</span>
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Vertical</h2>
        <CodeBlock>{`<Carousel orientation="vertical" className="w-full max-w-xs">
  <CarouselContent className="-mt-1 h-[200px]">
    {Array.from({ length: 5 }).map((_, i) => (
      <CarouselItem key={i} className="pt-1 md:basis-1/2">
        <div className="p-1">
          <Card>
            <CardContent className="flex items-center justify-center p-6">
              <span className="text-3xl font-semibold">{i + 1}</span>
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Autoplay</h2>
        <CodeBlock>{`import Autoplay from "embla-carousel-autoplay"
// Install: npm install embla-carousel-autoplay

const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }))

<Carousel
  plugins={[plugin.current]}
  onMouseEnter={plugin.current.stop}
  onMouseLeave={plugin.current.reset}
>
  ...
</Carousel>`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Props</h2>
        <PropsTable
          rows={[
            { prop: 'orientation', type: '"horizontal" | "vertical"', default: '"horizontal"', description: 'Scroll direction' },
            { prop: 'opts', type: 'EmblaOptionsType', default: '\u2014', description: 'Embla Carousel options (loop, align, etc.)' },
            { prop: 'plugins', type: 'EmblaPluginType[]', default: '\u2014', description: 'Embla plugins (Autoplay, etc.)' },
            { prop: 'setApi', type: '(api: CarouselApi) => void', default: '\u2014', description: 'Exposes the Embla API instance' },
          ]}
        />
        <p className="text-sm text-muted-foreground">
          Use <code>basis-1/2</code>, <code>basis-1/3</code>, etc. on <code>CarouselItem</code> to control how many items are visible.
        </p>
      </section>
    </div>
  )
}
