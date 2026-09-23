# Object key picker

Extract specific properties into a strictly typed object. Think of it like a filter: the raw object goes in, and a strictly typed subset comes out. You get exactly what you ask for, with full type safety.

This utility relies purely on the TypeScript standard library, so there are zero external services or extra dependencies to install. It just works out of the box.

```
pick.ts
```
Check the test file located next to the implementation. It walks through concrete usage patterns and shows you exactly how the types resolve in practice.

## Common questions

**Do I need to install an SDK first?**  
Nope. `pick.test.ts` communicates over plain HTTP. That keeps the setup tiny, which is why you just need `npx tsx` and a single environment variable to get going. That is the complete dependency list for this picker.