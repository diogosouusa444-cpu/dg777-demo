"use client";
import { useState } from "react";
import { login } from "@/app/lib/demoStore";

export default function Login() {
  const [u,setU]=useState("");
  const [p,setP]=useState("");

  return (
    <div className="panel">
      <input className="input" placeholder="Usuário" onChange={e=>setU(e.target.value)} />
      <input className="input" type="password" placeholder="Senha" onChange={e=>setP(e.target.value)} />
      <button className="btn" onClick={()=>{ if(login(u,p)) location.href="/"; }}>
        Entrar
      </button>
    </div>
  );
    }
                                                
