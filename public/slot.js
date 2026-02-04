<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>DG777 • Tigrinho Demo</title>

  <style>
    body{margin:0;font-family:Arial;background:radial-gradient(circle at top,#1a1a1a,#000);color:#fff}
    header{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:12px 14px;border-bottom:2px solid #f5c542;background:#0b0b0b;position:sticky;top:0}
    a{color:#f5c542;text-decoration:none;font-weight:700}
    .wrap{max-width:900px;margin:0 auto;padding:14px}
    .machine{background:#111;border:1px solid #333;border-radius:14px;padding:14px}
    .title{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:10px}
    .badge{font-size:12px;padding:6px 10px;border-radius:999px;background:rgba(245,197,66,.15);border:1px solid rgba(245,197,66,.35);color:#f5c542}
    .banner{display:flex;gap:12px;align-items:center;margin:10px 0 6px}
    .thumb{width:64px;height:64px;border-radius:14px;border:1px solid #2a2a2a;display:grid;place-items:center;font-size:34px;background:linear-gradient(180deg,#151515,#0b0b0b)}
    .banner h2{margin:0;font-size:18px}
    .banner p{margin:2px 0 0;color:#bbb;font-size:13px}

    .reels{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:10px}
    .reel{
      height:92px;border-radius:14px;
      background:linear-gradient(180deg,#151515,#0b0b0b);
      border:1px solid #2a2a2a;
      display:grid;place-items:center;
      font-size:46px;
      box-shadow: inset 0 0 0 1px rgba(255,255,255,.03);
    }

    .stat{display:flex;gap:10px;flex-wrap:wrap;margin-top:12px}
    .pill{padding:10px 12px;border-radius:999px;border:1px solid #333;background:#0f0f0f}
    input{width:110px;padding:10px 10px;border-radius:12px;border:1px solid #333;background:#0f0f0f;color:#fff;font-weight:700}

    .controls{display:flex;flex-wrap:wrap;gap:10px;margin-top:14px}
    .btn{border:0;border-radius:12px;padding:12px 14px;font-weight:800;cursor:pointer}
    .btn.primary{background:#f5c542;color:#111}
    .btn.ghost{background:transparent;color:#fff;border:1px solid #333}
    .btn:disabled{opacity:.6;cursor:not-allowed}

    .msg{margin-top:12px;color:#ddd}
    .small{color:#999;font-size:12px;margin-top:8px}

    /* efeito win */
    .winGlow{
      animation: glow .8s ease-in-out 2;
      border-color:#f5c542 !important;
    }
    @keyframes glow{
      0%{box-shadow:0 0 0 rgba(245,197,66,0)}
      50%{box-shadow:0 0 28px rgba(245,197,66,.35)}
      100%{box-shadow:0 0 0 rgba(245,197,66,0)}
    }
  </style>
</head>

<body>
  <header>
    <a href="index.html">← Voltar</a>
    <div style="font-weight:900;color:#f5c542">DG777 • Tigrinho Demo</div>
    <div class="badge">Somente Demo</div>
  </header>

  <div class="wrap">
    <div class="machine" id="machine">
      <div class="title">
        <div style="font-weight:900;font-size:18px">Tigrinho (demo)</div>
        <div class="badge" id="status">Pronto</div>
      </div>

      <div class="banner">
        <div class="thumb">🐯</div>
        <div>
          <h2>Gire e tente alinhar símbolos</h2>
          <p>Saldo e ganhos são fictícios. Apenas para teste.</p>
        </div>
      </div>

      <div class="reels">
        <div class="reel" id="r1">🐯</div>
        <div class="reel" id="r2">💰</div>
        <div class="reel" id="r3">🪙</div>
      </div>

      <div class="stat">
        <div class="pill" id="balance">Saldo: R$ 1.000,00</div>
        <div class="pill">Aposta: R$ <input id="bet" type="number" min="1" step="1" value="10"></div>
        <div class="pill" id="lastwin">Último ganho: R$ 0,00</div>
      </div>

      <div class="controls">
        <button class="btn primary" id="spin">Girar</button>
        <button class="btn ghost" id="max">Max (R$ 50)</button>
        <button class="btn ghost" id="reset">Resetar saldo</button>
      </div>

      <div class="msg" id="msg">Clique em <b>Girar</b> para jogar (demo).</div>
      <div class="small">*Não envolve dinheiro real. Apenas simulação.</div>
    </div>
  </div>

  <script src="slot.js"></script>
</body>
</html>
    
