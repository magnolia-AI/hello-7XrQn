'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { useToast } from "@/hooks/use-toast"
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { ArrowRight, Zap, Star, Heart, Sparkles, Rocket } from 'lucide-react'

export default function Home() {
  const { toast } = useToast()

  const showToast = () => {
    toast({
      title: "Welcome!",
      description: "Thanks for checking out our awesome website!",
    })
  }

  return (
    <div className="min-h-full">
      {/* Hero Section with Gradient Background */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-background to-background pt-32 pb-24">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(to_bottom,transparent,white)]"></div>
        <div className="container relative mx-auto px-4">
          <Badge className="mb-5 px-3 py-1 text-sm font-medium">✨ Welcome to our new site</Badge>
          <h1 className="max-w-4xl bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-5xl font-bold tracking-tight text-transparent lg:text-7xl">
            Create beautiful experiences that last
          </h1>
          <p className="mt-6 max-w-2xl text-xl text-muted-foreground">
            We build stunning digital products that help you connect with your audience and grow your business.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button size="lg" className="gap-2 px-8" onClick={showToast}>
              Get Started <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2 px-8">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Section with Tabs */}
      <section className="container mx-auto px-4 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <Badge variant="outline" className="mb-3 px-3 py-1 text-sm font-medium">
            <Sparkles className="mr-1 h-3.5 w-3.5" />
            Featured Work
          </Badge>
          <h2 className="mb-6 text-3xl font-bold tracking-tight lg:text-4xl">
            Explore our latest projects
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-muted-foreground">
            Discover how we've helped businesses transform their digital presence with innovative solutions and beautiful designs.
          </p>

          <Tabs defaultValue="web" className="mx-auto max-w-3xl">
            <TabsList className="mb-8 grid w-full grid-cols-3">
              <TabsTrigger value="web">Web Design</TabsTrigger>
              <TabsTrigger value="mobile">Mobile Apps</TabsTrigger>
              <TabsTrigger value="branding">Branding</TabsTrigger>
            </TabsList>
            <TabsContent value="web" className="mt-0">
              <Carousel className="mx-auto max-w-4xl">
                <CarouselContent>
                  {[1, 2, 3].map((item) => (
                    <CarouselItem key={item}>
                      <div className="overflow-hidden rounded-xl bg-muted p-1">
                        <div className="aspect-video overflow-hidden rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 p-12 text-center text-white">
                          <h3 className="text-2xl font-bold">Web Project {item}</h3>
                          <p className="mt-2 opacity-90">Beautiful responsive website design</p>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
            </TabsContent>
            <TabsContent value="mobile" className="mt-0">
              <Carousel className="mx-auto max-w-4xl">
                <CarouselContent>
                  {[1, 2, 3].map((item) => (
                    <CarouselItem key={item}>
                      <div className="overflow-hidden rounded-xl bg-muted p-1">
                        <div className="aspect-video overflow-hidden rounded-lg bg-gradient-to-br from-pink-500 to-orange-500 p-12 text-center text-white">
                          <h3 className="text-2xl font-bold">Mobile App {item}</h3>
                          <p className="mt-2 opacity-90">Intuitive mobile experience</p>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
            </TabsContent>
            <TabsContent value="branding" className="mt-0">
              <Carousel className="mx-auto max-w-4xl">
                <CarouselContent>
                  {[1, 2, 3].map((item) => (
                    <CarouselItem key={item}>
                      <div className="overflow-hidden rounded-xl bg-muted p-1">
                        <div className="aspect-video overflow-hidden rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 p-12 text-center text-white">
                          <h3 className="text-2xl font-bold">Brand Identity {item}</h3>
                          <p className="mt-2 opacity-90">Cohesive brand experience</p>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Services Section with Cards */}
      <section className="container mx-auto px-4 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <Badge variant="outline" className="mb-3 px-3 py-1 text-sm font-medium">
            <Rocket className="mr-1 h-3.5 w-3.5" />
            Our Services
          </Badge>
          <h2 className="mb-6 text-3xl font-bold tracking-tight lg:text-4xl">
            What we can do for you
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-muted-foreground">
            We offer a comprehensive range of services to help your business thrive in the digital landscape.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <Card className="group overflow-hidden border-none bg-gradient-to-b from-background to-muted/50 shadow-md transition-all hover:shadow-lg">
            <CardContent className="p-6 pt-8">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">Web Development</h3>
              <p className="text-muted-foreground">
                We build fast, responsive, and accessible websites that provide an exceptional user experience.
              </p>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <Button variant="ghost" className="group-hover:text-primary">
                Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </CardFooter>
          </Card>

          <Card className="group overflow-hidden border-none bg-gradient-to-b from-background to-muted/50 shadow-md transition-all hover:shadow-lg">
            <CardContent className="p-6 pt-8">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Star className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">UI/UX Design</h3>
              <p className="text-muted-foreground">
                We create intuitive and engaging user interfaces that delight your customers and drive conversions.
              </p>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <Button variant="ghost" className="group-hover:text-primary">
                Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </CardFooter>
          </Card>

          <Card className="group overflow-hidden border-none bg-gradient-to-b from-background to-muted/50 shadow-md transition-all hover:shadow-lg">
            <CardContent className="p-6 pt-8">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">Brand Strategy</h3>
              <p className="text-muted-foreground">
                We help you develop a cohesive brand identity that resonates with your target audience and stands out.
              </p>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <Button variant="ghost" className="group-hover:text-primary">
                Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-background p-8 text-center md:p-12">
          <Badge className="mb-5 px-3 py-1 text-sm font-medium">Start Your Journey</Badge>
          <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
            Ready to transform your digital presence?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
            Let's work together to create something amazing. Our team is ready to help you achieve your goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="gap-2 px-8">
              Get in Touch <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2 px-8">
              View Our Work
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
