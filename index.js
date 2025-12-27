/**
 * Ignore This Line
 */
import pino from "pino";

const logger = pino({
  transport: {
    target: "pino-pretty"
  }
})