"use client";

import Topbar from "@/app/components/Topbar";
import Lobby from "@/app/ui/Lobby";

export default function Home() {
  return (
    <>
      <Topbar />
      <Lobby />
      <div className="footer">DG77 • Demo apenas (sem dinheiro real)</div>
    </>
  );
}
