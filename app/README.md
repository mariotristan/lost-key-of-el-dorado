# Authentication exercise / Ejercicio de autenticación / Exercício de autenticação

The implementation is intentionally vulnerable. It models a local in-memory service, not a real server. All usernames and passwords are synthetic training fixtures. Keep the existing exported function signatures and use only Node.js built-ins.

La implementación es intencionalmente vulnerable. Es un servicio local en memoria, no un servidor real. Todos los usuarios y contraseñas son datos de práctica. Conserva las firmas exportadas y usa solo módulos incluidos en Node.js.

A implementação é intencionalmente vulnerável. Ela representa um serviço local em memória, não um servidor real. Todos os usuários e senhas são dados de treinamento. Mantenha as assinaturas exportadas e use apenas módulos nativos do Node.js.

## Contract / Contrato

- `login(username, password, requestedRole)` returns an opaque session token on valid credentials; otherwise it throws `Error('Invalid credentials')`. `requestedRole` is untrusted and must not determine privileges. The demo accounts and roles are in `auth.js`.
- `exportCustomers(token)` returns the existing synthetic export to an authenticated administrator only. It throws `Error('Forbidden')` for a missing, invalid, or non-admin session.
- Independently generated session tokens must be unpredictable, collision-resistant, and not disclose the username or role. Authorization must use the server-side account role, not caller input.
- Do not remove or weaken the supplied tests. Do not add a network listener, real secrets, dependencies, or persistence. In-memory sessions are acceptable for this exercise; discuss their production limitations.

- `login(username, password, requestedRole)` devuelve un token de sesión opaco con credenciales válidas; si no, lanza `Error('Invalid credentials')`. `requestedRole` no es confiable y no debe determinar privilegios. Las cuentas y roles de práctica están en `auth.js`.
- `exportCustomers(token)` devuelve la exportación sintética existente solo a un administrador autenticado. Lanza `Error('Forbidden')` si la sesión falta, es inválida o no es de administrador.
- Los tokens generados independientemente deben ser impredecibles, resistentes a colisiones y no revelar usuario ni rol. La autorización debe usar el rol de la cuenta en el servidor, no datos del solicitante.
- No elimines ni debilites las pruebas. No agregues un servidor de red, secretos reales, dependencias ni persistencia. Las sesiones en memoria son aceptables aquí; explica sus limitaciones en producción.

- `login(username, password, requestedRole)` retorna um token de sessão opaco para credenciais válidas; caso contrário, lança `Error('Invalid credentials')`. `requestedRole` não é confiável e não deve determinar privilégios. As contas e papéis de treinamento estão em `auth.js`.
- `exportCustomers(token)` retorna a exportação sintética existente apenas para um administrador autenticado. Lança `Error('Forbidden')` para sessão ausente, inválida ou sem papel de administrador.
- Tokens gerados independentemente devem ser imprevisíveis, resistentes a colisões e não revelar usuário ou papel. A autorização deve usar o papel da conta no servidor, não dados do solicitante.
- Não remova nem enfraqueça os testes. Não adicione servidor de rede, segredos reais, dependências ou persistência. Sessões em memória são aceitáveis neste exercício; discuta suas limitações em produção.
