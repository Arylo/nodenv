import test from "ava";
import * as env from "../lib";

test.beforeEach(() => {
    delete process.env.NODE_ENV;
});

test("isProd", (t) => {
    process.env.NODE_ENV = env.ENV.PROD;
    t.true(env.isProd());
});

test("isProd", (t) => {
    t.false(env.isProd());
});

test("isDev", (t) => {
    process.env.NODE_ENV = env.ENV.DEV;
    t.true(env.isDev());
});

test("isDev", (t) => {
    t.false(env.isDev());
});

test("isLocal", (t) => {
    process.env.NODE_ENV = env.ENV.LOCAL;
    t.true(env.isLocal());
});

test("isLocal", (t) => {
    t.false(env.isLocal());
});

test("isTest", (t) => {
    process.env.NODE_ENV = env.ENV.TEST;
    t.true(env.isTest());
});

test("isTest", (t) => {
    t.false(env.isTest());
});

test("isExp", (t) => {
    process.env.NODE_ENV = env.ENV.EXP;
    t.true(env.isExp());
});

test("isExp", (t) => {
    t.false(env.isExp());
});

test("isGray", (t) => {
    process.env.NODE_ENV = env.ENV.GRAY;
    t.true(env.isGray());
});

test("isGray", (t) => {
    t.false(env.isGray());
});

test("isCI", (t) => {
    process.env.NODE_ENV = env.ENV.CI;
    t.true(env.isCI());
});

test("isCI", (t) => {
    t.false(env.isCI());
});
