import { Link } from "react-router-dom";
export default function ReadySection() {
  return (
    <div className="flex flex-col items-center justify-start bg-red-600 text-white text-center space-y-6 pt-10 pb-10">
      <h1 className="text-7xl font-semibold">Are You READY Now ?</h1>

<Link
  to="/contactform1"
  className="bg-white text-black px-6 py-2 rounded-full shadow-md hover:scale-105 transition-transform font-semibold h-13 w-80 border-3 border-black inline-block text-center"
>
  Yes, I am Ready
</Link>

      <h2 className="text-7xl font-bold pt-8">Suprans</h2>

      <p className="text-sm mt-4">© 2025 AI Challenge. All rights reserved.</p>
    </div>
  );
}
