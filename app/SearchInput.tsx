"use client";

import { useRouter } from "next/navigation";

export function SearchInput() {
  const router = useRouter();

  return (
    <input
      onChange={(event) => {
        router.push("/?q=" + event.target.value);
      }}
    />
  );
}
