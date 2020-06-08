export default function Hero({ children }) {
  return (
    <>
      <p className="hero">{children}</p>
      <style jsx>{`
        .hero {
          font-size: 1.2em;
          line-height: 1.4;
        }
      `}</style>
    </>
  );
}
