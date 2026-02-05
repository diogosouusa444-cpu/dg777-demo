"use client";
import Link from "next/link";
import { getCurrent, logout } from "@/app/lib/demoStore";
import { useEffect, useState } from "react";

export default function Topbar() {
  const [me, setMe] = useState(null);

  useEffect(() => {
    setMe(getCurrent());
    const id = setInterval(() => setMe(getCurrent()), 700);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="topbar">
      <div className="brand">
        <div className="logo">DG</div>
        <div>
          <div style={{fontWeight:900}}>DG77</div>
          <div className="small">Casino DEMO</div>
        </div>
      </div>

      <div className="kpi">
        <span className="pill">Saldo: <b>{me ? me.balance : 0}</b></span>
        {me ? (
          <>
            {me.role === "admin" && <Link className="pill" href="/admin">ADM</Link>}
            <button className="btn secondary" onClick={() => { logout(); location.href="/"; }}>
              Sair
            </button>
          </>
        ) : (
          <Link className="btn secondary" href="/login">Entrar</Link>
        )}
      </div>
    </div>
  );
    }
          
