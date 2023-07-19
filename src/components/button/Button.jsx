export default function Button({ className, children, onClick }) {
  return (
    <div
      className={`${className} bg-secondary rounded-md w-fit
    dark:bg-quaternary`}
    >
      <button
        className={`rise text-sm px-2 py-1 bg-white rounded-md border-secondary border
        dark:bg-primary dark:border-quaternary
        ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}
