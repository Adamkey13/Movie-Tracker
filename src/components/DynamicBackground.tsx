import "../styles/DynamicBackground.css";

export function DynamicBackground() {
  return (
    <div className="dynamic-background" aria-hidden="true">
      <div className="bg-blob blob-one"></div>
      <div className="bg-blob blob-two"></div>
      <div className="bg-blob blob-three"></div>
      <div className="bg-grid"></div>
      <div className="bg-vignette"></div>
    </div>
  );
}