import {Button} from "@/components/ui/button";


export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 p-3 m-2 mt-0 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-md">
      <div className="flex items-center justify-between">
        <div>
        <p className="font-bold">Preview of Spotify</p>
        <p className="text-sm font-bold">
          Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.
        </p>
        </div>
        <Button className="text-black bg-white rounded-full mr-4" size="lg">Sign up free</Button>
      </div>
    </footer>
  )
}