import chalk from 'chalk'

export const logger = {
  log: (...args) => console.log(chalk.gray(...args)),
  info: (...args) => console.log(chalk.blue(...args)),
  success: (...args) => console.log(chalk.green(...args)),
  warn: (...args) => console.warn(chalk.yellow(...args)),
  error: (...args) => console.error(chalk.red(...args))
}
