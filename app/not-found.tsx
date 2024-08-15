"use client";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-full justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold">Error</h2>
        <p>Something went wrong!</p>
        <Button
          variant="secondary"
          onClick={() => reset()}
          className=" text-white font-bold py-2 px-4 rounded relative top-4"
        >
          Try again
        </Button>
        <Button
          variant="outline"
          onClick={() => (window.location.href = "/")}
          className=" text-white font-bold py-2 px-4 rounded relative top-8"
        >
          Back to Home
        </Button>
      </div>
    </div>
  );
}
