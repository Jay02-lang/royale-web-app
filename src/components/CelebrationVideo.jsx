export default function CelebrationVideo() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-background/80 dark:bg-background/90 mix-blend-normal z-10 transition-colors duration-700" />
      <div className="absolute inset-0 bg-rhombus-net z-20 pointer-events-none" />
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60 dark:opacity-30"
      >
        <source src="https://cdn.pixabay.com/video/2021/08/11/84687-586940801_large.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
