import { useNavigate, useRouteError } from "react-router-dom";
import { Button } from "@components/button";
import { FrownIcon, MoveLeft } from "lucide-react";

export default function ErrorComponent() {
  const error: any = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="bg-white shadow-xl rounded-2xl p-10 max-w-lg w-full text-center">
        <div className="flex justify-center mb-6">
          <FrownIcon className="text-red-500 text-6xl" />
        </div>

        <h1 className="text-3xl font-bold text-gray-800 mb-2">Oops!</h1>
        <h2 className="text-lg text-gray-600 mb-4">
          Something went wrong while loading this page.
        </h2>

        {error && (
          <p className="text-sm text-gray-500 mb-6">
            {error?.status} {error?.statusText || "Unexpected Error"}
          </p>
        )}

        <Button
          type="primary"
          icon={<MoveLeft size={16} strokeWidth={1.75} absoluteStrokeWidth />}
          size="large"
          onClick={() => navigate(-1)}
          className="rounded-lg"
        >
          Go Back
        </Button>
      </div>
    </div>
  );
}
