/** NODE_ENV 集合 */
export enum ENV {
    /** 开发环境 */
    PROD = "production",
    /** 生产环境 */
    DEV = "development",
    /** 本地环境 */
    LOCAL = "local",
    /** 测试环境 */
    TEST = "test",
    /** 正式环境 */
    EXP = "experience",
    /** 灰度环境 */
    GRAY = "gray",
    /** CI 环境 */
    CI = "ci"
}

/**
 * process.env.NODE_ENV 不存在时，初始化为`env`
 * @param env {string} [env="development"]
 */
export const init = (env: ENV | string = ENV.DEV) => {
    return !process.env.NODE_ENV ? set(env) : false;
};

/**
 * 获取process.env.NODE_ENV
 */
export const get = () => {
    return process.env.NODE_ENV;
};

/**
 * 设置process.env.NODE_ENV 为`env`
 * @param env {string}
 */
export const set = (env: ENV | string) => {
    if (typeof env !== "string") {
        return false;
    }
    env = env.trim().toLowerCase();
    process.env.NODE_ENV = env;
    return true;
};

/**
 * 是否本地环境
 * @returns boolean
 */
export const isLocal = () => {
    let env = process.env.NODE_ENV;
    if (typeof env !== "string") {
        return false;
    }
    env = env.trim().toUpperCase();
    return ["local"].map((item) => item.trim().toUpperCase()).indexOf(env) !== -1;
};

/**
 * 是否测试环境
 * @returns boolean
 */
export const isTest = () => {
    let env = process.env.NODE_ENV;
    if (typeof env !== "string") {
        return false;
    }
    env = env.trim().toUpperCase();
    return ["test"].map((item) => item.trim().toUpperCase()).indexOf(env) !== -1;
};

/**
 * 是否开发环境
 * @returns boolean
 */
export const isDev = () => {
    let env = process.env.NODE_ENV;
    if (typeof env !== "string") {
        return false;
    }
    env = env.trim().toUpperCase();
    return (
        ["dev", "develop", "development"]
            .map((item) => item.trim().toUpperCase())
            .indexOf(env) !== -1
    );
};

/**
 * 是否生产环境
 * @returns boolean
 */
export const isProd = () => {
    let env = process.env.NODE_ENV;
    if (typeof env !== "string") {
        return false;
    }
    env = env.trim().toUpperCase();
    return (
        ["prod", "production"]
            .map((item) => item.trim().toUpperCase())
            .indexOf(env) !== -1
    );
};

/**
 * 是否正式环境
 * @returns boolean
 */
export const isExp = () => {
    let env = process.env.NODE_ENV;
    if (typeof env !== "string") {
        return false;
    }
    env = env.trim().toUpperCase();
    return (
        ["exp", "experience"]
            .map((item) => item.trim().toUpperCase())
            .indexOf(env) !== -1
    );
};

/**
 * 是否灰度环境
 * @returns boolean
 */
export const isGray = () => {
    let env = process.env.NODE_ENV;
    if (typeof env !== "string") {
        return false;
    }
    env = env.trim().toUpperCase();
    return ["gray"].map((item) => item.trim().toUpperCase()).indexOf(env) !== -1;
};

/**
 * 是否CI 环境
 * @returns boolean
 */
export const isCI = () => {
    let env = process.env.NODE_ENV;
    if (typeof env !== "string") {
        return false;
    }
    env = env.trim().toUpperCase();
    return ["ci"].map((item) => item.trim().toUpperCase()).indexOf(env) !== -1;
};
