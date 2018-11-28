import test from "ava";
import * as env from "../lib";

test.beforeEach(() => {
    delete process.env.NODE_ENV;
});

test((t) => {
    env.init();
    t.true(env.isDev());
});

test((t) => {
    process.env.NODE_ENV = "test";
    env.init();
    t.false(env.isDev());
    t.true(env.isTest());
});

test((t) => {
    env.init("test");
    t.false(env.isDev());
    env.set("dev");
    t.true(env.isDev());
});
