import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative h-full z-40 bg-transparent top-24 flex flex-col justify-center items-center gap-16"
    >
      <h1
        data-aos="fade-in"
        className="text-6xl font-bold dark:text-white text-black text-center"
      >
        Contact
      </h1>
      <Card className="mx-auto max-w-sm bg-transparent">
        <CardHeader>
          <CardTitle className="text-xl">Contact me</CardTitle>
          <CardDescription>
            Fill out the form below to get in touch with me.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="first-name">First name</Label>
                <Input id="first-name" placeholder="Max" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input id="last-name" placeholder="Robinson" required />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                placeholder="Write your message here..."
                required
              />
            </div>
            <Button type="submit" className="w-full dark:text-black text-white">
              Submit
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
