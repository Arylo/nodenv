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
    CI = "ci",
    /** 真实环境 */
    REAL = "real"
}

/**
 * process.env.NODE_ENV 不存在时，初始化为`env`
 * @param env {string} [env="development"]
 */
export function init(env: ENV | string = ENV.DEV) {
    return !process.env.NODE_ENV ? set(env) : false;
}

/**
 * 获取process.env.NODE_ENV
 */
export function get() {
    return process.env.NODE_ENV;
}

/**
 * 设置process.env.NODE_ENV 为`env`
 * @param env {string}
 */
export function set(env: ENV | string) {
    if (!env || typeof env !== "string") {
        return false;
    }
    env = env.trim().toLowerCase();
    process.env.NODE_ENV = env;
    return true;
}

/**
 * 判断环境参数
 * @param e
 */
export function is(e: ENV | string) {
    let env = get();
    if (!env || typeof env !== "string") {
        return false;
    }
    env = env.trim().toLowerCase();
    return e === env;
}

/**
 * 是否本地环境
 * @returns boolean
 */
export function isLocal() {
    let env = get();
    if (!env || typeof env !== "string") {
        return false;
    }
    env = env.trim().toLowerCase();
    const envs: string[] = [ENV.LOCAL];
    return envs.indexOf(env) !== -1;
}

/**
 * 是否测试环境
 * @returns boolean
 */
export function isTest() {
    let env = get();
    if (!env || typeof env !== "string") {
        return false;
    }
    env = env.trim().toLowerCase();
    const envs: string[] = [ENV.TEST];
    return envs.indexOf(env) !== -1;
}

/**
 * 是否开发环境
 * @returns boolean
 */
export function isDev() {
    let env = get();
    if (!env || typeof env !== "string") {
        return false;
    }
    env = env.trim().toLowerCase();
    const envs: string[] = [ENV.DEV, ENV.DEVELOP, ENV.DEVELOPMENT];
    return envs.indexOf(env) !== -1;
}

/**
 * 是否生产环境
 * @returns boolean
 */
export function isProd() {
    let env = get();
    if (!env || typeof env !== "string") {
        return false;
    }
    env = env.trim().toLowerCase();
    const envs: string[] = [ENV.PROD, ENV.PRODUCT, ENV.PRODUCTION];
    return envs.indexOf(env) !== -1;
}

/**
 * 是否体验环境
 * @returns boolean
 */
export function isExp() {
    let env = get();
    if (!env || typeof env !== "string") {
        return false;
    }
    env = env.trim().toLowerCase();
    const envs: string[] = [ENV.EXP, ENV.EXPERIENCE];
    return envs.indexOf(env) !== -1;
}

/**
 * 是否灰度环境
 * @returns boolean
 */
export function isGray() {
    let env = get();
    if (!env || typeof env !== "string") {
        return false;
    }
    env = env.trim().toLowerCase();
    const envs: string[] = [ENV.GRAY];
    return envs.indexOf(env) !== -1;
}

/**
 * 是否CI 环境
 * @returns boolean
 */
export function isCI() {
    let env = get();
    if (!env || typeof env !== "string") {
        return false;
    }
    env = env.trim().toLowerCase();
    const envs: string[] = [ENV.CI];
    return envs.indexOf(env) !== -1;
}

/**
 * 是否真实环境
 * @returns boolean
 */
export function isReal() {
    let env = get();
    if (!env || typeof env !== "string") {
        return false;
    }
    env = env.trim().toLowerCase();
    const envs: string[] = [ENV.REAL];
    return envs.indexOf(env) !== -1;
}
