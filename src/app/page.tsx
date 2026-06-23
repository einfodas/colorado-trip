import Header from "@/components/layout/Header";
import MobileNav from "@/components/layout/MobileNav";
import Section from "@/components/layout/Section";
import Overview from "@/components/overview/Overview";
import TripCalendar from "@/components/calendar/TripCalendar";
import DayTimeline from "@/components/timeline/DayTimeline";
import AttractionCards from "@/components/attractions/AttractionCard";
import HotelCards from "@/components/hotels/HotelCard";
import RestaurantCards from "@/components/dining/RestaurantCard";
import CarRental from "@/components/transport/CarRental";
import WeatherSafety from "@/components/safety/WeatherSafety";
import AltitudeHealth from "@/components/safety/AltitudeHealth";
import PackingChecklist from "@/components/packing/PackingChecklist";
import BudgetBreakdown from "@/components/budget/BudgetBreakdown";
import QuickLinks from "@/components/links/QuickLinks";
import ActionItems from "@/components/actions/ActionItems";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pb-20 md:pb-0">
        <Section id="overview" title="Trip Overview">
          <Overview />
        </Section>

        <Section id="calendar" title="7-Day Calendar" subtitle="Tap a day to jump to its timeline">
          <TripCalendar />
        </Section>

        <Section id="itinerary" title="Day-by-Day Itinerary">
          <DayTimeline />
        </Section>

        <Section id="attractions" title="Attractions" subtitle="All planned activities with pricing and tips">
          <AttractionCards />
        </Section>

        <Section id="hotels" title="Hotels" subtitle="Accommodations by city">
          <HotelCards />
        </Section>

        <Section id="dining" title="Dining" subtitle="Restaurants by city with costs">
          <RestaurantCards />
        </Section>

        <Section id="transport" title="Car Rental" subtitle="Comparison and tips">
          <CarRental />
        </Section>

        <Section id="safety" title="Weather & Safety">
          <WeatherSafety />
        </Section>

        <Section id="altitude" title="Altitude & Health">
          <AltitudeHealth />
        </Section>

        <Section id="packing" title="Packing Checklist">
          <PackingChecklist />
        </Section>

        <Section id="budget" title="Budget Breakdown">
          <BudgetBreakdown />
        </Section>

        <Section id="links" title="Quick Links">
          <QuickLinks />
        </Section>

        <Section id="actions" title="Pre-Trip Tasks">
          <ActionItems />
        </Section>
      </main>
      <MobileNav />
    </>
  );
}
