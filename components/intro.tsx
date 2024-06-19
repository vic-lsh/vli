import { UrlLink } from "./ui/url-link";

export const Intro = () => {
  return (
    <div className="flex flex-col gap-4 max-w-2xl m-auto">
      <p>
        {`Hello there! I'm Vic, a first-year CS PhD student at
        University of Washington. `}

        {`I am part of the `}
        <UrlLink href="https://syslab.cs.washington.edu/">
          UW Computer Systems Lab
        </UrlLink>
        {`, advised by `}
        <UrlLink href="https://homes.cs.washington.edu/~simpeter/">
          Simon Peter
        </UrlLink>
        {` and `}
        <UrlLink href="https://www.cs.washington.edu/people/faculty/tom">
          Tom Anderson
        </UrlLink>
        {`. `}
      </p>
      <p>
        <span>
          {`I design systems for emerging datacenter computing trends. `}
        </span>
        <span>
          {`My latest work improves datacenter resource utilization
          with HW/SW co-design, resource pooling, and scheduling.`}
        </span>
      </p>
      <p>
        {`Before UW, I worked with `}
        <UrlLink href="https://cs.brown.edu/people/malte/">
          Malte Schwarzkopf
        </UrlLink>
        {` and `}
        <UrlLink href="http://www.abelay.me/">Adam Belay</UrlLink>
        {` as a member of the `}
        <UrlLink href="https://etos.cs.brown.edu">ETOS group</UrlLink>
        {` at Brown. `}
        {`Before that, I studied Finance and CS as an undergraduate at NYU Stern School of Business,
        with a focus on high-performance quantitative trading.`}
      </p>
      <p>
      </p>
    </div>
  );
};
