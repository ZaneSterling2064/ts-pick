import assert from "node:assert/strict";
import { pick } from "./pick.ts";

assert.deepEqual(pick({ id: 7, name: "Ada", internal: true }, ["id", "name"]), { id: 7, name: "Ada" });
