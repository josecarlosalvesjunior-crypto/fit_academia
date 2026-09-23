# Fit Academia

Aplicativo web para alunos de academia, feito com **HTML**, **CSS** e **JavaScript** puro e pensado para funcionar bem no **celular e no computador**. Tem tela de login, menu lateral e telas de treinos, agenda, avaliações, planos, metas, pagamentos e perfil, tudo em uma única página, com tema escuro e detalhes em laranja.

Projeto de front-end desenvolvido para praticar **HTML**, **CSS** e **JavaScript**. Os dados exibidos são fixos (não há banco de dados nem back-end).

---

## Funcionalidades

| Recurso | Descrição |
|---------|-----------|
| **Login simulado** | A tela inicial já vem com usuário e senha de teste preenchidos. Ao clicar em **Entrar**, o app é exibido |
| **Navegação entre telas** | O menu lateral e os atalhos trocam de tela sem recarregar a página (*Single Page Application*) |
| **Menu hambúrguer** | Em telas pequenas (até 768px) o menu lateral fica escondido e abre pelo botão de menu |
| **Check-in** | Na tela de Agenda, o botão **Agendar / Fazer Check-in** abre uma janela de confirmação |

### Telas do app

| Tela | O que mostra |
|------|--------------|
| **Início** | Saudação, card do plano atual, próximo treino e acesso rápido a Agenda, Metas e Pagamento |
| **Treinos** | Filtros (Todos, A-Z, Meus treinos), busca e grupos musculares: Peito, Ombro, Tríceps e Perna |
| **Agenda** | Faixa com os dias da semana, treino do dia e botão de check-in |
| **Avaliações** | Avaliação física com peso, percentual de gordura e massa magra |
| **Planos** | Plano atual do aluno e botão para alterar |
| **Metas** | Metas com barra de progresso (perder peso e ganho de massa) |
| **Pagamentos** | Próxima cobrança, valor e forma de pagamento |
| **Perfil** | Foto, nome, e-mail e opções de dados e preferências |

---

## Estrutura do projeto

```
fit_academia/
├── index.html
├── style.css
├── script.js
└── README.md
```

| Arquivo | Responsabilidade |
|---------|------------------|
| `index.html` | Estrutura da página: tela de login, menu lateral, todas as telas do app e a janela de check-in |
| `style.css` | Visual do app: cores, cards, botões, barras de progresso, menu lateral e versão para celular (`@media`) |
| `script.js` | Comportamento: login simulado, troca de telas, menu hambúrguer e janela de check-in |

---

## Tecnologias e conceitos

- **HTML5** semântico (`aside`, `nav`, `main`, `section`)
- **CSS3** com variáveis (`:root`) para as cores e o tamanho das bordas
- Layout responsivo com `@media (max-width: 768px)`
- **JavaScript** puro
- Manipulação do DOM: `querySelector`, `querySelectorAll` e `classList`
- Eventos com `addEventListener` (`click` e `submit`)
- Atributos `data-target` para ligar cada botão à sua tela
- Estruturas de controle: `forEach` e `if/else`


---

Feito por José Carlos 🚀
