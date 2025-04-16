import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">TestimonialVault</span>
          </div>
          <nav className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost">Sign in</Button>
            </Link>
            <Link href="/signup">
              <Button>Get started</Button>
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="container mx-auto flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center gap-8 px-4 py-16 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Collect and showcase your client testimonials
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Build trust and credibility with potential clients by displaying authentic testimonials.
            Easy to collect, beautiful to display.
          </p>
          <div className="flex gap-4">
            <Link href="/signup">
              <Button size="lg">Start collecting testimonials</Button>
            </Link>
            <Link href="/login">
              <Button variant="outline" size="lg">
                Sign in to dashboard
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t py-6">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} TestimonialVault. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
