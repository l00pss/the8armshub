import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/algorithms/intro">
            Start Learning Algorithms 🧠
          </Link>
          <Link
            className="button button--outline button--lg"
            to="/docs/mathematics/intro">
            Explore Mathematics 📐
          </Link>
          <Link
            className="button button--outline button--lg"
            to="/docs/distributed-systems/intro">
            Build Distributed Systems 🌐
          </Link>
          <Link
            className="button button--outline button--lg"
            to="/blog">
            Read Blog 📝
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Welcome to The8ArmsHub"
      description="Master algorithms, mathematics, and distributed systems with comprehensive guides, Go implementations, and practical examples. Your one-stop resource for computational thinking and system design.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />

        {/* Additional sections can be added here */}
        <section className={styles.aboutSection}>
          <div className="container">
            <div className="row">
              <div className="col col--8 col--offset-2">
                <div className="text--center">
                  <Heading as="h2">A Modern Learning Environment</Heading>
                  <p className="margin-bottom--lg">
                    The8ArmsHub provides comprehensive coverage of three essential areas
                    of computer science: algorithms for problem-solving, mathematics for
                    understanding computational foundations, and distributed systems for
                    building scalable applications. Every concept is explained clearly and
                    implemented in Go with practical examples.
                  </p>
                  <p className="margin-bottom--lg">
                    Whether you're a student preparing for technical interviews, a developer
                    building large-scale systems, or an engineer looking to deepen your
                    theoretical knowledge, our content bridges theory and practice with
                    real-world applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
