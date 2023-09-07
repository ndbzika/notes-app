import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-3">
      <h1 className="text-6xl">Oops!</h1>
      <p className="text-base">Sorry, an unexpected error has occurred.</p>
      <p className="text-sm italic text-gray-500">
        <i>{error.statusText || error?.message}</i>
      </p>
    </div>
  );
}
