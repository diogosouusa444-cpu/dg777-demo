"use client";
import Link from "next/link";

export default function Lobby() {
  return (
    <div className="grid">
      <div className="card">
        <div className="body">
          <p className="title">Tigrinho Demo</p>
          <Link className="btn" href="/play/tigrinho">Jogar</Link>
        </div>
      </div>
    </div>
  );
}

