import { cardsData } from "@/data/dashboard";
import DashCard from "./dashboard/DashCard";
import WarningMessage from "@/components/myComponents/WarningMessage";
import PerformanceChart from "./dashboard/charts/PerformanceChart";
import ProductsChart from "./dashboard/charts/ProductsChart";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-4 pb-10">
      <div className="flex flex-col lg:flex-row gap-3">
        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1 h-fit">
          <WarningMessage className="grid-cols-1 md:col-span-2">
            We regret to inform you that our server is currently experiencing
            unexpected technical issues. Our team is actively working to resolve
            the problem as quickly as possible. We apologize for any
            inconvenience caused and appreciate your patience.
          </WarningMessage>
          {cardsData.map((card, index) => {
            return <DashCard key={index} card={card} />;
          })}
        </div>
        {/* CHART */}
        <div className="flex-1">
          <PerformanceChart />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <ProductsChart />
      </div>
    </div>
  );
}
