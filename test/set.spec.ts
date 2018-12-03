import test from "ava";
import * as env from "../lib";

test.beforeEach(() => {
    delete process.env.NODE_ENV;
});

test((t) => {
    t.true(env.set(env.ENV.DEV));
    t.true(env.isDev());
});
