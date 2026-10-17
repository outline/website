export default function Hero({ children }) {
  return (
    <>
      <div className="hero">{children}</div>
      <style jsx>{`
        .hero {
          font-size: 1.2em;
          line-height: 1.4;
        }
      `}</style>
    </>
  );
}
