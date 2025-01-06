import env from "env-var";

const config = {
    EMAIL: env.get('EMAIL').required().asString(),
    LOGIN_CODE: env.get('LOGIN_CODE').required().asString()
}

export default config;