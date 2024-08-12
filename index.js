// server.js
const express = require("express");
const app = express();
const port = 8080;

app.use(express.json());

app.use("/api/categoriaproduto", require("./routes/categoriaProdutoRoutes"));
app.use("/api/endereco", require("./routes/enderecoRoutes"));
app.use("/api/cliente", require("./routes/clienteRoutes"));
app.use("/api/contato", require("./routes/contatoRoutes"));
app.use("/api/tipousuario", require("./routes/tipousuarioRoutes"));
app.use("/api/usuario", require("./routes/usuarioRoutes"));
app.use("/api/fornecedor", require("./routes/fornecedorRoutes"));
app.use("/api/contas", require("./routes/contasRoutes"));
app.use("/api/produto", require("./routes/produtoRoutes"));
app.use("/api/estoque", require("./routes/estoqueRoutes"));
app.use("/api/venda", require("./routes/vendaRoutes"));
app.use("/api/itemvenda", require("./routes/itemvendaRoutes"));
app.use("/api/relatorio", require("./routes/relatorioRoutes"));
app.use("/api/representante", require("./routes/representanteRoutes"));

app.get("/", (req, res) => {
  res.send("API is running");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
