import { Suspense } from "react";
import { SearchInput } from "./SearchInput";

export default function Home({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  return (
    <>
      <SearchInput />
      <Suspense fallback={<div>Loading...</div>}>
        <Results query={searchParams.q ?? ""} />
      </Suspense>
    </>
  );
}

async function Results({ query }: { query: string }) {
  await new Promise((resolve) => setTimeout(resolve, 2500));

  return <div>Results for {JSON.stringify(query)}</div>;
}
