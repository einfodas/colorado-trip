import Header from "@/components/layout/Header";
import MobileNav from "@/components/layout/MobileNav";
import ScrollHandler from "@/components/layout/ScrollHandler";
import Section from "@/components/layout/Section";
import Hero from "@/components/layout/Hero";
import Overview from "@/components/overview/Overview";
import TripCalendar from "@/components/calendar/TripCalendar";
import DayTimeline from "@/components/timeline/DayTimeline";
import AttractionCards from "@/components/attractions/AttractionCard";
import HotelCards from "@/components/hotels/HotelCard";
import FlightCard from "@/components/transport/FlightCard";
import RestaurantCards from "@/components/dining/RestaurantCard";
import CarRental from "@/components/transport/CarRental";
import WeatherSafety from "@/components/safety/WeatherSafety";
import AltitudeHealth from "@/components/safety/AltitudeHealth";
import PackingChecklist from "@/components/packing/PackingChecklist";
import BudgetBreakdown from "@/components/budget/BudgetBreakdown";
import QuickLinks from "@/components/links/QuickLinks";
import ActionItems from "@/components/actions/ActionItems";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <ScrollHandler />
      <Header />
      <main className="pb-20 md:pb-0">
        <Hero />

        <Section id="overview" title="Trip Overview">
          <Overview />
        </Section>

        <Section id="calendar" title="7-Day Calendar" subtitle="Tap a day to jump to its timeline" bg="warm">
          <TripCalendar />
        </Section>

        <Section id="itinerary" title="Day-by-Day Itinerary">
          <DayTimeline />
        </Section>

        <Section id="flights" title="Flights" subtitle="Delta Flight 3876 — Round trip" bg="cool">
          <FlightCard />
        </Section>

        <Section id="attractions" title="Attractions" subtitle="All planned activities with pricing and tips">
          <AttractionCards />
        </Section>

        <Section id="hotels" title="Hotels" subtitle="Accommodations by city" bg="warm">
          <HotelCards />
        </Section>

        <Section id="dining" title="Dining" subtitle="Restaurants by city with costs">
          <RestaurantCards />
        </Section>

        <Section id="transport" title="Car Rental" subtitle="Comparison and tips" bg="cool">
          <CarRental />
        </Section>

        <Section id="safety" title="Weather & Safety">
          <WeatherSafety />
        </Section>

        <Section id="altitude" title="Altitude & Health" bg="accent">
          <AltitudeHealth />
        </Section>

        <Section id="packing" title="Packing Checklist">
          <PackingChecklist />
        </Section>

        <Section id="budget" title="Budget Breakdown" bg="warm">
          <BudgetBreakdown />
        </Section>

        <Section id="links" title="Quick Links">
          <QuickLinks />
        </Section>

        <Section id="actions" title="Pre-Trip Tasks" bg="cool">
          <ActionItems />
        </Section>
      </main>
      <Footer />
      <MobileNav />
    </>
  );
}
