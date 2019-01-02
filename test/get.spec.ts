import test from "ava";
import * as env from "../lib";

test.beforeEach(() => {
    delete process.env.NODE_ENV;
});

test.serial("Inited", (t) => {
    process.env.NODE_ENV = env.ENV.PROD;
    t.is(env.get(), env.ENV.PROD);
});

test.serial("No Init", (t) => {
    t.is(env.get(), undefined);
});
