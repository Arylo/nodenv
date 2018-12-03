import test from "ava";
import * as env from "../lib";

test.beforeEach(() => {
    delete process.env.NODE_ENV;
});

test((t) => {
    process.env.NODE_ENV = env.ENV.PROD;
    t.is(env.get(), env.ENV.PROD);
});

test((t) => {
    t.is(env.get(), undefined);
});
