import test from "ava";
import * as env from "../lib";

test.beforeEach(() => {
    delete process.env.NODE_ENV;
});

test((t) => {
    process.env.NODE_ENV = env.ENV.PROD;
    t.true(env.isProd());
});

test((t) => {
    t.false(env.isProd());
});

test((t) => {
    process.env.NODE_ENV = env.ENV.DEV;
    t.true(env.isDev());
});
test((t) => {
    t.false(env.isDev());
});

test((t) => {
    process.env.NODE_ENV = env.ENV.LOCAL;
    t.true(env.isLocal());
});

test((t) => {
    t.false(env.isLocal());
});

test((t) => {
    process.env.NODE_ENV = env.ENV.TEST;
    t.true(env.isTest());
});

test((t) => {
    t.false(env.isTest());
});

test((t) => {
    process.env.NODE_ENV = env.ENV.EXP;
    t.true(env.isExp());
});

test((t) => {
    t.false(env.isExp());
});

test((t) => {
    process.env.NODE_ENV = env.ENV.GRAY;
    t.true(env.isGray());
});

test((t) => {
    t.false(env.isGray());
});

test((t) => {
    process.env.NODE_ENV = env.ENV.CI;
    t.true(env.isCI());
});

test((t) => {
    t.false(env.isCI());
});
