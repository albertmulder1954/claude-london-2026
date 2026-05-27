export default function VideoEmbed({ youtubeId, titel }: { youtubeId: string; titel: string }) {
  return (
    <div className="relative w-full rounded-xl overflow-hidden shadow-lg bg-black aspect-video">
      <iframe
        src={`https://www.youtube.com/embed/${youtubeId}`}
        title={titel}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}
