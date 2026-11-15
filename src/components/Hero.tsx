import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";
import { useEffect, useRef } from "react";
import heroVideo from "@/assets/hero-video-optimized.asset.json";
import heroPoster from "@/assets/hero-poster.asset.json";
import { PHONE, PHONE_TEL } from "@/lib/business";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPlayback = () => {
      if (motionPreference.matches) {
        video.pause();
        return;
      }
      void video.play().catch(() => {});
    };

    syncPlayback();
    motionPreference.addEventListener("change", syncPlayback);
    return () => motionPreference.removeEventListener("change", syncPlayback);
  }, []);

  return (
    <section className="relative isolate overflow-hidden">
      <video
        ref={videoRef}
        className="hero-motion-video absolute inset-0 -z-10 size-full object-cover"
        src={heroVideo.url}
        poster={heroPoster.url}
        muted
        loop
        playsInline
        preload="none"
        aria-hidden="true"
        tabIndex={-1}
      />
      <img
        src={heroPoster.url}
        alt=""
        aria-hidden="true"
        className="hero-motion-poster absolute inset-0 -z-10 hidden size-full object-cover"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-white via-white/85 to-white/40 md:to-white/10"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl px-4 pt-16 pb-28 sm:px-6 md:pt-28 md:pb-40">
        <div className="max-w-xl">
          <p className="text-xs font-bold tracking-[0.24em] text-primary">
            CAR &amp; AUTO TRAVELS
          </p>
          <h1 className="mt-4 text-4xl leading-tight font-extrabold tracking-tight text-navy sm:text-5xl md:text-6xl">
            Reliable Car &amp; Auto{" "}
            <span className="text-primary">Travel Services</span>
          </h1>
          <p className="mt-5 text-base text-muted-foreground sm:text-lg">
            Pickup, drop, local travel and long-distance trips across Visakhapatnam,
            Anakapalli, Kakinada, Madugula, Narsipatnam, Chodavaram, Annavaram,
            Tirupati and nearby areas. Longer-distance trips can also be provided
            on request.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={PHONE_TEL}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-bold text-primary-foreground shadow-card transition-colors hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              <Phone className="size-5" aria-hidden="true" />
              CALL NOW {PHONE}
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-navy/15 bg-background px-7 py-4 text-base font-bold text-navy transition-colors hover:border-primary hover:text-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
            >
              BOOK A TRIP
              <ArrowRight className="size-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
