import React, { ReactNode } from "react";

type SectionLayoutProps = {
  children: ReactNode;
  bgcolor: string;
};

const SectionLayout: React.FC<SectionLayoutProps> = ({ children, bgcolor }) => {
  return (
    <section
      className={`px-10 sm:px-20 lg:px-32 xl:px-40 2xl:px-60 ${bgcolor}`}
    >
      {children}
    </section>
  );
};

export { SectionLayout };
