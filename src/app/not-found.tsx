import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream">
      <div className="text-center">
        <h1 className="font-serif text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          Page Not Found
        </h2>
        <p className="text-muted-foreground mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="btn-primary inline-flex items-center justify-center px-8 py-4"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
