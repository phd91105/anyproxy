import { config } from "dotenv";
config();

export const PROXY_PORT = process.env.PROXY_PORT || 8001;
export const WEB_INTERFACE_PORT = process.env.WEB_INTERFACE_PORT;
