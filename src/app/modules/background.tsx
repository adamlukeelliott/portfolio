"use client";

const Background = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="max-h-screen flex-grow p-6 z-0 relative h-full w-full"
    >
      {children}
    </div>
  );
};

export default Background;
