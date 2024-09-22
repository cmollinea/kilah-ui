const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <article className="flex place-content-center text-pretty p-6 py-16 text-lg leading-relaxed">
      <div className="grid w-full max-w-prose gap-4">{children}</div>
    </article>
  );
};
export default AboutLayout;
