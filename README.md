# Object key picker

You have a massive object. You only need three specific properties. Copying them manually is tedious. It often loses type safety too. We can do better. This utility copies selected own properties into a strictly typed object.

It relies entirely on the TypeScript standard library. Zero external dependencies. No background services to configure. Just pure type manipulation.

```
pick.ts
```

Want to see the before and after? Check out the test file sitting right next to the implementation. It provides concrete examples showing exactly how the types transform.