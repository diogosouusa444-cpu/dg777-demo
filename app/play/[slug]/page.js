"use client";

import Link from "next/link";

export default function Play({ params }) {
  return (
    <div className="panel">
      <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", gap:10}}>
        <div>
          <div style={{fontWeight:900, fontSize:18}}>Jogo: {params?.slug}</div>
          <div className="small">DEMO • Sem dinheiro real</div>
        </div>
        <Link className="btn secondary" href="/">Voltar</Link>
      </div>

      <div style={{marginTop:14, textAlign:"center"}}>
        <div className="small">Mini game DEMO</div>
        <div id="reels" style={{fontSize:36, fontWeight:900, margin:"14px 0"}}>🐯 💎 ⭐</div>
        <button className="btn" onClick={()=>{
          const items = ["🐯","🍀","💎","⭐","🍒","7️⃣"];
          const pick = () => items[Math.floor(Math.random()*items.length)];
          const el = document.getElementById("reels");
          if (el) el.textContent = `${pick()} ${pick()} ${pick()}`;
        }}>
          Girar
        </button>
      </div>
    </div>
  );
  }
            
