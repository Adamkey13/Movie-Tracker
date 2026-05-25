export function DynamicBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[var(--bg-color)]"
      aria-hidden="true"
    >
      <div className="absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-[var(--accent-color)] opacity-40 blur-3xl [animation:floatBlob_18s_ease-in-out_infinite_alternate]" />

      <div className="absolute -right-36 top-[22%] h-[420px] w-[420px] rounded-full bg-[var(--button-color)] opacity-40 blur-3xl [animation:floatBlob_18s_ease-in-out_infinite_alternate] [animation-delay:-6s]" />

      <div className="absolute bottom-[-180px] left-[35%] h-[420px] w-[420px] rounded-full bg-[var(--outline-color)] opacity-40 blur-3xl [animation:floatBlob_18s_ease-in-out_infinite_alternate] [animation-delay:-11s]" />

      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(var(--outline-color)_1px,transparent_1px),linear-gradient(90deg,var(--outline-color)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(circle_at_center,black,transparent_75%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.42)_100%)]" />
    </div>
  );
}