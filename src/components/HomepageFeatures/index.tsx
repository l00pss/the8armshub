import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Deep Dives into Algorithms',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Master everything from essential sorting and searching algorithms to
        advanced topics like graph theory and dynamic programming. Each concept
        includes clear explanations, complexity analysis, and practical Go implementations.
      </>
    ),
  },
  {
    title: 'Comprehensive Mathematics',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Explore linear algebra, calculus, discrete mathematics, and statistics.
        Mathematical foundations for computer science, machine learning, and
        engineering applications made accessible with Go examples.
      </>
    ),
  },
  {
    title: 'Distributed Systems Mastery',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Learn to build scalable, fault-tolerant distributed systems. From consensus
        algorithms to microservices architecture, understand how modern large-scale
        applications are designed and implemented in Go.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
