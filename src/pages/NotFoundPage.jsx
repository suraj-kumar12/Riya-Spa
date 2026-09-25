import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Calendar, Compass } from 'lucide-react';

export default function NotFoundPage({ onOpenBooking }) {
  return (
    <main className="flex-grow pt-32 pb-24 bg-[#FAF8F5] flex items-center justify-center min-h-[70vh]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-white border border-[#E8E2D9] rounded-full text-xs tracking-[0.2em] uppercase text-[#C5A059] font-medium shadow-2xs">
          <Compass className="w-3.5 h-3.5" />
          <span>Error 404 • Page Not Found</span>
        </div>

        <h1 className="font-serif text-5xl sm:text-6xl text-[#2C2724] font-normal tracking-tight">
          Sanctuary Path Not Found
        </h1>

        <div className="w-16 h-0.5 bg-[#C5A059] mx-auto rounded-full" />

        <p className="text-base text-[#6E675F] font-light leading-relaxed max-w-lg mx-auto">
          The page you are looking for might have been moved, renamed, or is temporarily unavailable. Return to Lotus Spa to explore our luxury spa therapies in Viman Nagar Pune.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-xs tracking-[0.16em] uppercase font-medium text-white bg-[#C5A059] hover:bg-[#B38E46] transition-colors rounded-2xs shadow-2xs"
          >
            <Home className="w-4 h-4 mr-2" />
            Return to Homepage
          </Link>

          <Link
            to="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-xs tracking-[0.16em] uppercase font-medium text-[#2C2724] bg-white border border-[#E8E2D9] hover:border-[#C5A059] transition-colors rounded-2xs shadow-2xs"
          >
            <ArrowLeft className="w-4 h-4 mr-2 text-[#C5A059]" />
            Explore Services
          </Link>
        </div>
      </div>
    </main>
  );
}
