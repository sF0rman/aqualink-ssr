import path from "path";

export const PUBLIC_DIR_PATH = process.env.PUBLIC_DIR_PATH ?? path.join(__dirname, "public");
