import test from "ava";
import * as env from "../lib";

test.beforeEach(() => {
    delete process.env.NODE_ENV;
});

test("Default", (t) => {
    t.true(env.init());
    t.true(env.isDev());
});

test((t) => {
    process.env.NODE_ENV = env.ENV.TEST;
    t.false(env.init());
    t.true(env.isTest());
    t.false(env.isDev());
    t.true(env.isTest());
});
