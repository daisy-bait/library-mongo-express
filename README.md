### Scaffolding
This is my Clean Architecture attemtp on NodeJs following the Hexagonal Architecture Principles of Robert C. Martin (Uncle Bob).

```
app/
├─ dist/
├─ src/
│  ├─ application/
│  │  ├─ use_cases/
│  ├─ common/
│  │  ├─ interfaces/
│  ├─ domain/
│  │  ├─ contracts/
│  │  │  ├─ business/
│  │  │  ├─ persistence/
│  │  ├─ entities/
│  │  ├─ exceptions/
│  ├─ infrastructure/
│  │  ├─ config/
│  │  ├─ persistence/
│  │  │  ├─ dao/
│  │  │  ├─ mapper/
│  │  │  ├─ model/
│  │  │  ├─ schema/
│  │  ├─ rest/
│  │  │  ├─ dto/
│  │  │  ├─ mapper/
│  │  │  ├─ middlewares/
│  │  │  ├─ routes/
├─ app.ts
node_modules/
.env
.gitignore
eslint.config.js
package-lock.json
package.json
tsconfig.json
```