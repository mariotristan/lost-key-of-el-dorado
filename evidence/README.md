# Incident evidence / Evidencia / Evidências

All timestamps are UTC. Addresses are reserved for documentation. All data is fictional.

## Relay reference / Referencia / Referência

The relay assigns a `key_id` consisting of the final two hyphen-separated components of a credential. The old relay configuration was removed from the current tree. An ordinary removal does not erase Git history.

El relay asigna un `key_id` formado por los dos últimos componentes de la credencial separados por guiones. La configuración antigua se eliminó de la versión actual; eso no borra el historial Git.

O relay atribui um `key_id` formado pelos dois últimos componentes da credencial separados por hífens. A configuração antiga foi removida da versão atual; isso não apaga o histórico Git.

## Operations note / Nota operativa / Nota operacional

- The scheduled reconciliation export normally starts at 13:00 UTC, uses `192.0.2.10`, and contains at most 200 synthetic customer records. Only the reconciliation job was authorized that day.
- La exportación programada de conciliación normalmente comienza a las 13:00 UTC, usa `192.0.2.10` y contiene como máximo 200 registros sintéticos. Ese día solo se autorizó el proceso de conciliación.
- A exportação agendada de conciliação normalmente começa às 13:00 UTC, usa `192.0.2.10` e contém no máximo 200 registros sintéticos. Naquele dia, apenas o processo de conciliação foi autorizado.

[`relay-events.csv`](relay-events.csv) contains simulated relay and export events. `session` links actions to a successful relay authentication; `records` is the number of synthetic records returned, not the number of people affected. A failed request does not create a session.

[`relay-events.csv`](relay-events.csv) contiene eventos simulados del relay y de exportación. `session` vincula acciones con una autenticación exitosa; `records` indica registros sintéticos devueltos, no personas afectadas. Una solicitud fallida no crea sesión.

[`relay-events.csv`](relay-events.csv) contém eventos simulados do relay e de exportação. `session` relaciona ações a uma autenticação bem-sucedida; `records` indica registros sintéticos retornados, não pessoas afetadas. Uma solicitação malsucedida não cria sessão.
