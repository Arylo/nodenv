import test from "ava";
import * as env from "../lib";

test.beforeEach(() => {
    delete process.env.NODE_ENV;
});

test((t) => {
    t.true(env.set(env.ENV.DEV));
    t.true(env.isDev());
});

test((t) => {
    t.false(env.set(1 as any));
});

test((t) => {
    env.init();
    t.true(env.isDev());
    t.false(env.set(undefined as any));
    t.true(env.isDev());
});
