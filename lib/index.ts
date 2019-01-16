/** NODE_ENV 集合 */
export enum ENV {
    /** 生产环境 */
    PROD = "prod",
    /** 生产环境 */
    PRODUCT = "product",
    /** 生产环境 */
    PRODUCTION = "production",
    /** 开发环境 */
    DEV = "dev",
    /** 开发环境 */
    DEVELOP = "develop",
    /** 开发环境 */
    DEVELOPMENT = "development",
    /** 本地环境 */
    LOCAL = "local",
    /** 测试环境 */
    TEST = "test",
    /** 体验环境 */
    EXP = "exp",
    /** 体验环境 */
    EXPERIENCE = "experience",
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
    if (!env || typeof env !== "string") {
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
    if (!env || typeof env !== "string") {
        return false;
    }
    env = env.trim().toLowerCase();
    const envs: string[] = [ENV.LOCAL];
    return envs.indexOf(env) !== -1;
};

/**
 * 是否测试环境
 * @returns boolean
 */
export const isTest = () => {
    let env = process.env.NODE_ENV;
    if (!env || typeof env !== "string") {
        return false;
    }
    env = env.trim().toLowerCase();
    const envs: string[] = [ENV.TEST];
    return envs.indexOf(env) !== -1;
};

/**
 * 是否开发环境
 * @returns boolean
 */
export const isDev = () => {
    let env = process.env.NODE_ENV;
    if (!env || typeof env !== "string") {
        return false;
    }
    env = env.trim().toLowerCase();
    const envs: string[] = [ENV.DEV, ENV.DEVELOP, ENV.DEVELOPMENT];
    return envs.indexOf(env) !== -1;
};

/**
 * 是否生产环境
 * @returns boolean
 */
export const isProd = () => {
    let env = process.env.NODE_ENV;
    if (!env || typeof env !== "string") {
        return false;
    }
    env = env.trim().toLowerCase();
    const envs: string[] = [ENV.PROD, ENV.PRODUCT, ENV.PRODUCTION];
    return envs.indexOf(env) !== -1;
};

/**
 * 是否体验环境
 * @returns boolean
 */
export const isExp = () => {
    let env = process.env.NODE_ENV;
    if (!env || typeof env !== "string") {
        return false;
    }
    env = env.trim().toLowerCase();
    const envs: string[] = [ENV.EXP, ENV.EXPERIENCE];
    return envs.indexOf(env) !== -1;
};

/**
 * 是否灰度环境
 * @returns boolean
 */
export const isGray = () => {
    let env = process.env.NODE_ENV;
    if (!env || typeof env !== "string") {
        return false;
    }
    env = env.trim().toLowerCase();
    const envs: string[] = [ENV.GRAY];
    return envs.indexOf(env) !== -1;
};

/**
 * 是否CI 环境
 * @returns boolean
 */
export const isCI = () => {
    let env = process.env.NODE_ENV;
    if (!env || typeof env !== "string") {
        return false;
    }
    env = env.trim().toLowerCase();
    const envs: string[] = [ENV.CI];
    return envs.indexOf(env) !== -1;
};
