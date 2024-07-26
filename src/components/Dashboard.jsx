import { CornerDownLeft } from "lucide-react";
import useAppContext from "../context/AppContext";
import { useEffect } from "react";

function Dashboard() {
  const { dashboard } = useAppContext();

  useEffect(() => {
    dashboard();
  }, []);

  return (
    <div className="relative h-full min-h-[100vh] bg-[#121212]">
      <button
        type="button"
        className="fixed bottom-4 right-4 flex items-center gap-1.5 bg-orange-500 text-white px-3 py-2 rounded hover:bg-orange-600">
        Create Todo
        <CornerDownLeft size={16} />
      </button>
    </div>
  );
}

export default Dashboard;
