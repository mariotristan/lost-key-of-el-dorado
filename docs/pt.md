# A chave perdida de El Dorado

**Uma investigação de segurança em uma fintech fictícia da América Latina.** Uma credencial do relay desapareceu da configuração atual pouco antes de uma exportação incomum de dados de clientes. Siga as evidências e corrija a fronteira de autenticação.

Idiomas: [English](../README.md) | [Español](es.md) | **Português**

## A missão

Você investiga um incidente na **Dorado Pago**, uma empresa totalmente fictícia. Em 18 de março de 2025, a equipe recebeu um alerta sobre uma exportação de clientes. Tudo aqui é inventado para treinamento offline: nomes, credenciais, contas, endereços IP e registros. Não há serviços reais a contatar, nem ataques externos necessários ou permitidos.

1. **Recupere a chave perdida.** A configuração antiga do relay não está mais na versão atual. Examine o histórico Git e encontre a credencial de treinamento, deliberadamente falsa. Explique onde a encontrou, como a verificou e por que apagar um arquivo não remove uma credencial do histórico.
2. **Reconstrua o incidente.** Use o identificador da credencial e as evidências em [`evidence/`](../evidence/) para identificar o acesso suspeito. Informe horário, endereço de origem, sessão, ações e resultado. Separe fatos observados de hipóteses e cite as linhas ou eventos que sustentam suas conclusões.
3. **Corrija autenticação e autorização.** Analise [`app/auth.js`](../app/auth.js), execute os testes e corrija o fluxo vulnerável. Explique o ataque, suas mudanças e os compromissos envolvidos. Testes adicionais focados são bem-vindos.

## Primeiros passos

Você precisa de Git e Node.js 20 ou superior. Clone normalmente, sem `--depth`: um ZIP ou clone raso pode omitir o histórico necessário à etapa 1. Trabalhe localmente; não é necessário instalar dependências nem conectar-se a serviços.

```sh
git clone https://github.com/mariotristan/lost-key-of-el-dorado.git
cd lost-key-of-el-dorado
git log --all --oneline
node --test
```

Os testes de segurança **falham inicialmente de propósito**. Faça todos passarem sem enfraquecê-los ou removê-los. O contrato da API e os requisitos de segurança estão em [`app/README.md`](../app/README.md). A credencial falsa é uma pista de investigação, não uma senha do aplicativo.

## O que preparar

Prepare um breve relatório privado com:

- A credencial falsa, o caminho e o commit históricos, e seus passos de investigação.
- Uma cronologia do acesso suspeito com referências, explicações alternativas e grau de confiança.
- Suas alterações e testes, uma explicação das vulnerabilidades e recomendações priorizadas de contenção e prevenção.
- Premissas e limitações. Valorizamos raciocínio claro e compromissos justificados, não apenas velocidade. Trabalho parcial bem explicado também é útil.

**As entregas ainda não estão abertas.** Não publique soluções, forks com soluções, pull requests, respostas em issues nem a credencial falsa. A organização fornecerá um canal privado antes de aceitar entregas.

## Regras

Trabalhe somente com os arquivos e o código do seu clone local. Não examine, acesse ou ataque infraestrutura, contas, pessoas ou serviços reais de terceiros. Os blocos de IP reservados para documentação são evidências simuladas, não alvos. Não use credenciais ou dados pessoais reais.

Este é um exercício técnico fictício, não uma corrida de velocidade nem uma afirmação de que a geografia determina a capacidade. Você pode explicar seu trabalho em espanhol, português ou inglês.
