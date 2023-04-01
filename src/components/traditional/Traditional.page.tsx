import React from "react";
import useTraditionalFetch from "./hooks/useTraditionalFetch";

function TraditionalPage() {
  const { data, isLoading } = useTraditionalFetch();
  if (isLoading) return <div>Loading.....</div>;
  if (!data) return <div>Data not found</div>;
  return (
    <div className="flex items-center justify-center mt-4">
      <div className="flex flex-col gap-4">
        {data.map((item) => {
          return (
            <div key={item.post_id} className="p-2  max-w-sm border shadow">
              <h1 className="font-semibold text-gray-800">{item.post_title}</h1>
              <p className="text-xs">
                Posted by: <span className="font-medium">{item.post_user}</span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TraditionalPage;
