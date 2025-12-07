# Diagnóstico do Sistema de Login

## 🔍 Problema Identificado

Você tem o código `LIMA01` no Firebase mas não consegue fazer login.

## 📋 Verificações Necessárias

### 1. **Estrutura do Firebase**

Verifique se a coleção e o campo estão corretos no Firebase:

**Coleção**: `usuarios`
**Campo**: `codigoAcesso`

A estrutura esperada é:

```javascript
usuarios (coleção)
  └── documento_id
      └── codigoAcesso: "LIMA01"
```

### 2. **Possíveis Causas do Problema**

#### A. Nome da Coleção Incorreto

- ✅ O código busca em: `usuarios`
- ❓ Verifique se no Firebase a coleção se chama exatamente `usuarios` (sem acento, plural)

#### B. Nome do Campo Incorreto

- ✅ O código busca o campo: `codigoAcesso`
- ❓ Verifique se no Firebase o campo se chama exatamente `codigoAcesso` (camelCase)

#### C. Valor com Espaços ou Caracteres Extras

- ✅ O código faz `.trim()` para remover espaços
- ❓ Verifique se no Firebase o valor é exatamente `LIMA01` (sem espaços antes/depois)

#### D. Regras de Segurança do Firebase

- ❓ As regras do Firestore podem estar bloqueando a leitura
- Verifique as regras em: Firebase Console → Firestore Database → Rules

### 3. **Como Verificar no Firebase Console**

1. Acesse: https://console.firebase.google.com
2. Selecione seu projeto: `milaneelucas-e0638`
3. Vá em: **Firestore Database**
4. Procure a coleção: `usuarios`
5. Verifique se existe um documento com:
   - Campo: `codigoAcesso`
   - Valor: `LIMA01`

### 4. **Regras de Segurança Recomendadas**

Para permitir leitura da coleção `usuarios`, adicione estas regras:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Permitir leitura da coleção usuarios
    match /usuarios/{userId} {
      allow read: if true;
      allow write: if false;
    }

    // Permitir leitura e escrita nas outras coleções
    match /presencas/{presencaId} {
      allow read, write: if true;
    }

    match /presentes/{presenteId} {
      allow read, write: if true;
    }
  }
}
```

### 5. **Estrutura Correta do Documento**

Crie um documento na coleção `usuarios` com esta estrutura:

```javascript
{
  "codigoAcesso": "LIMA01",
  "nome": "Milane e Lucas",
  "tipo": "admin"
}
```

**Importante**:

- O campo deve ser `codigoAcesso` (camelCase)
- O valor deve estar em MAIÚSCULAS
- Não deve ter espaços extras

### 6. **Logs de Debug Adicionados**

Agora o código exibe logs no console do navegador:

1. Abra o DevTools (F12)
2. Vá na aba **Console**
3. Tente fazer login
4. Você verá:
   - "Buscando código: LIMA01"
   - "Documentos encontrados: 0" ou "Documentos encontrados: 1"
   - Se encontrar: "Usuário encontrado: {...}"
   - Se não encontrar: "Nenhum usuário encontrado com o código: LIMA01"

### 7. **Teste Manual no Firebase**

Para testar se o problema é de código ou de dados:

1. No Firebase Console, vá em Firestore
2. Clique na coleção `usuarios`
3. Clique em "Adicionar documento"
4. Use ID automático
5. Adicione campo:
   - Nome do campo: `codigoAcesso`
   - Tipo: string
   - Valor: `LIMA01`
6. Salve e tente fazer login novamente

### 8. **Checklist de Verificação**

- [ ] A coleção se chama `usuarios` (plural, sem acento)?
- [ ] O campo se chama `codigoAcesso` (camelCase)?
- [ ] O valor é `LIMA01` (maiúsculas, sem espaços)?
- [ ] As regras do Firestore permitem leitura?
- [ ] O projeto Firebase está correto (milaneelucas-e0638)?
- [ ] A configuração do Firebase em `firebaseConfig.js` está correta?

### 9. **Melhorias Implementadas no Login**

- ✅ Logs detalhados no console
- ✅ Mensagem de erro mais clara
- ✅ Spinner de carregamento
- ✅ Trim automático (remove espaços)
- ✅ Conversão para maiúsculas
- ✅ Botão desabilitado durante carregamento
- ✅ Alert visual para erros
- ✅ Dica sobre onde encontrar o código

### 10. **Próximos Passos**

1. **Verifique o console do navegador** ao tentar fazer login
2. **Copie os logs** que aparecerem
3. **Verifique a estrutura no Firebase** conforme descrito acima
4. **Ajuste as regras de segurança** se necessário
5. **Teste novamente** com o código LIMA01

## 🔧 Comandos Úteis

Para verificar se há erros de conexão com o Firebase, abra o console e digite:

```javascript
// Verificar se Firebase está conectado
console.log(db);

// Testar query manualmente
import { collection, getDocs } from "firebase/firestore";
const usuarios = await getDocs(collection(db, "usuarios"));
console.log("Total de usuários:", usuarios.size);
usuarios.forEach((doc) => console.log(doc.id, doc.data()));
```

## 📞 Informações de Debug

Quando você tentar fazer login, anote:

1. O que aparece no console do navegador
2. Qual mensagem de erro aparece na tela
3. Se há algum erro de rede na aba Network do DevTools

Com essas informações, podemos identificar exatamente onde está o problema!
