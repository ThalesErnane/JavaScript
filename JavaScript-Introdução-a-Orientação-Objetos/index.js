import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao/SistemaAutenticacao.js";

const diretor = new Diretor("Thales", 10000, 12345678912);
const gerente = new Gerente("Paulo", 5000, 1234567899);
const cliente = new Cliente("Thaila", "14568914578", "147");

diretor.cadastrarSenha("123456");
gerente.cadastrarSenha("1234");
const diretorEstaLogado =  SistemaAutenticacao.login(diretor, "123456");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "1234");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "147");


console.log( clienteEstaLogado, diretorEstaLogado, gerenteEstaLogado);





