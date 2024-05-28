import Gallery from "@/components/hotel/details/Gallery";
import Overview from "@/components/hotel/details/Overview";
import Summary from "@/components/hotel/details/Summary";

const DetailsPage = () => {
  return (
    <main>
      <Summary />
      <Gallery />
      <Overview />
    </main>
  );
};

export default DetailsPage;
