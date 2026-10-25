import "./App.css";
import { useEffect, useState } from "react";
import { AnimatePresence } from "motion/react";
import InvitationEnvelope from "./InvitationEnvelope";

function getCountdown() {
  // Wedding date: 27 April 2027.
  // Update the time when the ceremony schedule is finalized.
  const weddingDate = new Date("2027-04-27T00:00:00+05:30");
  const difference = Math.max(0, weddingDate.getTime() - Date.now());

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

function App() {
  const [invitationOpened, setInvitationOpened] = useState(false);
  const [countdown, setCountdown] = useState(getCountdown);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCountdown(getCountdown());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const scrollToCelebrations = () => {
    document.querySelector(".countdown-section")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <AnimatePresence>
        {!invitationOpened && (
          <InvitationEnvelope onOpen={() => setInvitationOpened(true)} />
        )}
      </AnimatePresence>

      <main className="wedding-page">
        {/* Main invitation */}

        <section className="wedding-hero">
          <div className="hero-overlay" />

          <div className="hero-content">
            <p className="eyebrow">WITH THE BLESSINGS OF OUR FAMILIES</p>

            <div className="hero-ornament" aria-hidden="true">
              ❦
            </div>

            <p className="invitation-intro">Together with their families</p>

            <h1 className="hero-names">
              <span>Anjali</span>
              <span className="hero-ampersand">&</span>
              <span>Kunal</span>
            </h1>

            <div className="gold-divider">
              <span>✦</span>
            </div>

            <p className="hero-message">
              Request the pleasure of your company
              <br />
              as they begin their forever together.
            </p>

            <div className="hero-date">
              <span className="hero-date-label">THE WEDDING DAY</span>

              <p>27 · APRIL · 2027</p>

              <span className="hero-location">VARANASI, INDIA</span>
            </div>

            <button className="luxury-button" onClick={scrollToCelebrations}>
              EXPLORE THE CELEBRATION
              <span aria-hidden="true"> ↓</span>
            </button>

            <div className="hero-bottom">
              <span>ANJALI</span>
              <span className="footer-star">✦</span>
              <span>KUNAL</span>
            </div>
          </div>
        </section>

        {/* Countdown */}

        <section className="countdown-section">
          <img
            className="countdown-illustration"
            src="/images/countdown-illustration.png"
            alt="An antique golden hourglass surrounded by ivory flowers, sage leaves, and wedding rings"
          />

          <p className="eyebrow">THE COUNTDOWN BEGINS</p>

          <h2>Until our forever</h2>

          <div className="countdown-grid">
            <div className="countdown-item">
              <span>{countdown.days}</span>
              <p>Days</p>
            </div>

            <div className="countdown-item">
              <span>{String(countdown.hours).padStart(2, "0")}</span>
              <p>Hours</p>
            </div>

            <div className="countdown-item">
              <span>{String(countdown.minutes).padStart(2, "0")}</span>
              <p>Minutes</p>
            </div>

            <div className="countdown-item">
              <span>{String(countdown.seconds).padStart(2, "0")}</span>
              <p>Seconds</p>
            </div>
          </div>
        </section>

        {/* Venue */}

        <section className="venue-section" id="venue">
          <img
            className="venue-illustration"
            src="/images/venue-illustration.png"
            alt="A romantic garden pavilion decorated with ivory flowers, blush curtains, and sage-green foliage"
          />

          <p className="eyebrow">WHERE WE CELEBRATE</p>

          <h2>The Venue</h2>

          <p className="venue-tagline">
            A beautiful place for our special day.
          </p>

          <div className="venue-divider">
            <span>✦</span>
          </div>

          <h3>Hotel Holiday Heights</h3>

          <p className="venue-address">Varanasi, Uttar Pradesh, India</p>

          <a
            className="venue-directions-button"
            href="https://www.google.com/maps/search/?api=1&query=Hotel+Holiday+Heights+Varanasi"
            target="_blank"
            rel="noreferrer"
          >
            VIEW DIRECTIONS
            <span aria-hidden="true"> ↗</span>
          </a>

          <p className="venue-note">
            We look forward to celebrating this special day with you.
          </p>
        </section>

        {/* Wedding Day Schedule */}

        <section className="schedule-section" id="schedule">
          <img
            className="schedule-illustration"
            src="/images/schedule-illustration.png"
            alt="An elegant watercolor wedding scroll decorated with flowers, golden vessels, and blush fabric"
          />

          <p className="eyebrow">THE WEDDING DAY</p>

          <h2 className="schedule-title">The Schedule</h2>

          <p className="schedule-subtitle">
            The moments that make our day unforgettable.
          </p>

          <div className="schedule-timeline">
            <article className="schedule-item">
              <div className="schedule-marker">
                <span>01</span>
              </div>

              <div className="schedule-details">
                <p className="schedule-time">MORNING</p>
                <h3>The Ring Ceremony</h3>
                <p>
                  A beautiful promise of love, surrounded by family, blessings,
                  and happiness.
                </p>
              </div>
            </article>

            <article className="schedule-item">
              <div className="schedule-marker">
                <span>02</span>
              </div>

              <div className="schedule-details">
                <p className="schedule-time">AFTER THE CEREMONY</p>
                <h3>Lunch</h3>
                <p>
                  A delightful gathering to share a meal and celebrate this
                  special occasion together.
                </p>
              </div>
            </article>

            <article className="schedule-item">
              <div className="schedule-marker">
                <span>03</span>
              </div>

              <div className="schedule-details">
                <p className="schedule-time">DAYTIME</p>
                <h3>The Wedding Ceremony</h3>
                <p>
                  Sacred traditions, heartfelt blessings, and the beginning of a
                  beautiful journey together.
                </p>
              </div>
            </article>

            <article className="schedule-item">
              <div className="schedule-marker">
                <span>04</span>
              </div>

              <div className="schedule-details">
                <p className="schedule-time">EVENING</p>
                <h3>The Reception</h3>
                <p>
                  An evening of celebration, dinner, laughter, and treasured
                  memories with our loved ones.
                </p>
              </div>
            </article>
          </div>

          <p className="schedule-note">
            Exact timings will be shared closer to the wedding.
          </p>
        </section>

        {/* A Note From Us */}

        <section className="note-section" id="our-note">
          <img
            className="note-illustration"
            src="/images/note-illustration.png"
            alt="Watercolor wedding stationery with ivory flowers, sage foliage, a golden wax seal, and a lavender ribbon"
          />

          <p className="eyebrow">A MESSAGE FROM THE COUPLE</p>

          <h2 className="note-title">A Note From Us</h2>

          <p className="note-intro">
            We feel incredibly grateful to celebrate this day
            <br className="desktop-break" />
            with the people we love most.
          </p>

          <div className="note-divider">
            <span>✦</span>
          </div>

          <article className="note-card">
            <span className="note-ornament" aria-hidden="true">
              ❧
            </span>

            <h3>A Little Note</h3>

            <p>
              Your presence and blessings mean the world to us. We cannot wait
              to share the joy, laughter, and beautiful memories of this special
              day with our family and friends.
            </p>

            <p>
              As we begin this new chapter together, having you by our side will
              make our celebration even more meaningful.
            </p>

            <p className="note-signoff">
              With love,
              <span>Anjali &amp; Kunal</span>
            </p>
          </article>
        </section>

        {/* Wedding Closing Section */}

        <footer className="wedding-footer">
          <div className="closing-artwork">
            <img
              className="closing-floral-image"
              src="/images/wedding-closing-flowers.png"
              alt=""
              aria-hidden="true"
            />

            <div className="closing-content">
              <p className="closing-message">
                Thank you for being part of our story
              </p>

              <h2 className="closing-couple-names">
                <span>Anjali</span>
                <span className="closing-ampersand">&amp;</span>
                <span>Kunal</span>
              </h2>

              <div className="closing-divider">
                <span>✦</span>
              </div>

              <p className="closing-date">27 APRIL 2027</p>

              <p className="closing-location">VARANASI, INDIA</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

export default App;
