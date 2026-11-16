

import { Clock, Truck, CheckCircle } from "lucide-react";



const TrackingStepper = ({ statuses, currentStatus }) => {
  const statusIcons = [
    <Clock key="processing" size={22} />,
    <Truck key="shipped" size={22} />,
    <CheckCircle key="delivered" size={22} />,
  ];

  const descriptions = [
    "Your order has been received and is being processed.",
    "Your order has been shipped and is on its way.",
    "Your order has been delivered successfully.",
  ];

  return (
    <section className="mt-10">
      <h2 className="mb-8 text-lg font-bold">
        Delivery Progress
      </h2>

      <div className="space-y-8">
        {statuses.map((status, index) => {
          const completed = index <= currentStatus;

          return (
            <div key={status} className="flex gap-4">
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${
                  completed
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-400"
                }`}
              >
                {statusIcons[index]}
              </div>

              <div>
                <h3
                  className={`font-semibold ${
                    completed ? "text-gray-900" : "text-gray-400"
                  }`}
                >
                  {status}
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  {descriptions[index]}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TrackingStepper;