import test from "ava";
import * as env from "../lib";

test.beforeEach(() => {
    delete process.env.NODE_ENV;
});

test.serial("is #1", (t) => {
    t.false(env.is("real"));
});

test.serial("is #2", (t) => {
    process.env.NODE_ENV = "real";
    t.true(env.is("real"));
    process.env.NODE_ENV = "REAL";
    t.true(env.is("real"));
    t.false(env.is("noreal"));
});

test.serial("isProd #1", (t) => {
    process.env.NODE_ENV = env.ENV.PROD;
    t.true(env.isProd());
});

test.serial("isProd #2", (t) => {
    t.false(env.isProd());
});

test.serial("isDev #1", (t) => {
    process.env.NODE_ENV = env.ENV.DEV;
    t.true(env.isDev());
});

test.serial("isDev #2", (t) => {
    t.false(env.isDev());
});

test.serial("isLocal #1", (t) => {
    process.env.NODE_ENV = env.ENV.LOCAL;
    t.true(env.isLocal());
});

test.serial("isLocal #2", (t) => {
    t.false(env.isLocal());
});

test.serial("isTest #1", (t) => {
    process.env.NODE_ENV = env.ENV.TEST;
    t.true(env.isTest());
});

test.serial("isTest #2", (t) => {
    t.false(env.isTest());
});

test.serial("isExp #1", (t) => {
    process.env.NODE_ENV = env.ENV.EXP;
    t.true(env.isExp());
});

test.serial("isExp #2", (t) => {
    t.false(env.isExp());
});

test.serial("isGray #1", (t) => {
    process.env.NODE_ENV = env.ENV.GRAY;
    t.true(env.isGray());
});

test.serial("isGray #2", (t) => {
    t.false(env.isGray());
});

test.serial("isCI #1", (t) => {
    process.env.NODE_ENV = env.ENV.CI;
    t.true(env.isCI());
});

test.serial("isCI #2", (t) => {
    t.false(env.isCI());
});
