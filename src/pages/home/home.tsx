import styles from "./Home.module.scss";
import { Link } from "react-router";
export default function Home() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h2>Refresh Your Style!</h2>
          <p>
            Discover our latest collections and exclusive offers crafted just
            for you.
          </p>
          <Link to="/catalog">
            <button className={styles.ctaButton}>Explore Collections</button>
          </Link>
        </div>
      </section>

      {/* Store Information Section */}
      <section className={styles.storeInfo}>
        <h2>Why Choose Us?</h2>
        <div className={styles.infoCards}>
          <div className={styles.infoCard}>
            <h3>Premium Quality</h3>
            <p>We select only top-quality products from trusted suppliers.</p>
          </div>
          <div className={styles.infoCard}>
            <h3>Distinctive Style</h3>
            <p>Our constantly updated range keeps you in vogue.</p>
          </div>
          <div className={styles.infoCard}>
            <h3>Exceptional Service</h3>
            <p>Fast delivery and unmatched customer support at your service.</p>
          </div>
        </div>
      </section>

      {/* News & Deals Section */}
      <section className={styles.news}>
        <h2>News & Deals</h2>
        <div className={styles.newsList}>
          <article className={styles.newsItem}>
            <h3>Spring Sale</h3>
            <p>
              Enjoy up to 50% off on seasonal collections. Refresh your wardrobe
              now!
            </p>
            <Link to="/catalog" className={styles.moreLink}>
              Learn More
            </Link>
          </article>
          <article className={styles.newsItem}>
            <h3>New Arrivals</h3>
            <p>
              Be the first to explore our latest arrivals and exciting trends.
            </p>
            <Link to="/" className={styles.moreLink}>
              Learn More
            </Link>
          </article>
          <article className={styles.newsItem}>
            <h3>Loyalty Program</h3>
            <p>
              Join our program and enjoy exclusive rewards for every purchase.
            </p>
            <Link to="/" className={styles.moreLink}>
              Learn More
            </Link>
          </article>
        </div>
      </section>

      {/* About Us Section */}
      <section className={styles.about}>
        <h2>About MyStore</h2>
        <p>
          MyStore is your destination for high-quality products designed to
          elevate your unique style. We are committed to ensuring every purchase
          brings joy and satisfaction, while our service exceeds all your
          expectations. Experience shopping redefined.
        </p>
        <button className={styles.aboutButton}>Read More</button>
      </section>

      {/* Additional Section: Testimonials */}
      <section className={styles.testimonials}>
        <h2>What Our Customers Say</h2>
        <div className={styles.testimonialList}>
          <blockquote className={styles.testimonial}>
            <p>
              "MyStore offers an amazing variety of products and the customer
              service is unmatched. Highly recommended!"
            </p>
            <cite>- Alex</cite>
          </blockquote>
          <blockquote className={styles.testimonial}>
            <p>
              "The quality and style of the collections are impressive. I always
              find something unique!"
            </p>
            <cite>- Jamie</cite>
          </blockquote>
        </div>
      </section>
    </main>
  );
}
