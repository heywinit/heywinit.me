import {
  Github,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  Link,
  Clock,
  Heart,
  Blocks,
} from "lucide-react";
import LocationCard from "./LocationCard";

export default function AboutGrid() {
  return (
    <div className="mx-auto w-full max-w-5xl p-4 py-8">
      <h1 className="mb-8 text-center text-4xl font-bold">About Me</h1>

      <div className="grid grid-cols-4 grid-rows-[repeat(12,minmax(0,1fr))] gap-6">
        {/* Location Card - col 1-2, row 1-6 */}
        <div className="col-span-2 row-span-6 row-start-1">
          <LocationCard />
        </div>

        {/* Connect Card - col 3-4, row 1-7 */}
        <div className="col-span-2 col-start-3 row-span-7 row-start-1 rounded-lg border border-border bg-card p-6">
          <div className="mb-4 flex items-center gap-2">
            <Link className="h-4 w-4 text-primary" />
            <span>Connect</span>
          </div>
          <div className="space-y-4">
            <a
              href="#"
              className="flex items-center gap-3 transition-colors hover:text-primary"
            >
              <Github className="h-5 w-5" /> GitHub
            </a>
            <a
              href="#"
              className="flex items-center gap-3 transition-colors hover:text-primary"
            >
              <Facebook className="h-5 w-5" /> Facebook
            </a>
            <a
              href="#"
              className="flex items-center gap-3 transition-colors hover:text-primary"
            >
              <Instagram className="h-5 w-5" /> Instagram
            </a>
            <a
              href="#"
              className="flex items-center gap-3 transition-colors hover:text-primary"
            >
              <Twitter className="h-5 w-5" /> X
            </a>
            <a
              href="#"
              className="flex items-center gap-3 transition-colors hover:text-primary"
            >
              <Youtube className="h-5 w-5" /> YouTube
            </a>
          </div>
        </div>

        {/* Stacks Card - col 1-2, row 7-12 */}
        <div className="col-span-2 col-start-1 row-span-6 row-start-7 rounded-lg border border-border bg-card p-6">
          <div className="mb-4 flex items-center gap-2">
            <Blocks className="h-4 w-4 text-primary" />
            <span>Stacks</span>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {/* Add your tech stack icons here */}
          </div>
        </div>

        {/* Coding Hours Card - col 3, row 8-12 */}
        <div className="col-start-3 row-span-5 row-start-8 rounded-lg border border-border bg-card p-6">
          <div className="mb-4 flex items-center gap-2">
            <Clock className="h-4 w-4 text-primary" />
            <span>Coding hours</span>
          </div>
          <div className="text-4xl font-bold">3554 hrs</div>
        </div>

        {/* Favorite Framework Card - col 4, row 8-12 */}
        <div className="col-start-4 row-span-5 row-start-8 rounded-lg border border-border bg-card p-6">
          <div className="mb-4 flex items-center gap-2">
            <Heart className="h-4 w-4 text-primary" />
            <span>Fav. framework</span>
          </div>
          <div className="flex justify-center">
            {/* Add your favorite framework icon here */}
          </div>
        </div>
      </div>
    </div>
  );
}
