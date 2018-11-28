/**
 * process.env.NODE_ENV 不存在时，初始化为`env`
 * @param env {string} [env="development"]
 */
export const init = (env = "development") => {
    if (!process.env.NODE_ENV) {
        set(env);
    }
};

/**
 * 获取process.env.NODE_ENV
 */
export const get = () => {
    return process.env.NODE_ENV;
};

/**
 * 设置process.env.NODE_ENV 为`env`
 * @param env {string} [env="development"]
 */
export const set = (env = "development") => {
    process.env.NODE_ENV = env.trim().toUpperCase();
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
 * 是否Gray 环境
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
 * 是否Gray 环境
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
