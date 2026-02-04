const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Servir arquivos do site
app.use(express.static(path.join(__dirname, "public")));

// Rota de teste
app.get("/api/status", (req, res) => {
  res.json({ status: "DG777 DEMO ONLINE 🚀" });
});

app.listen(PORT, () => {
  console.log("Servidor rodando na porta", PORT);
});

