export default function About() {
  return (
    <div
      className="flex flex-col gap-4
    md:flex-row"
    >
      <img
        src="/assets/jacob.jpg"
        alt="jacob lang profile"
        className="w-full"
      />
      <div className="w-4/5">
        <p>Fill this up with a bio on Jacob.</p>
      </div>
    </div>
  );
}
