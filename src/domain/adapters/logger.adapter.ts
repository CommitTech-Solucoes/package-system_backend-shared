export interface LoggerAdapter {
  debug(message: string, context?: string): void;
  log(message: string, context?: string): void;
  error(message: string, context?: string, trace?: string): void;
  warn(message: string, context?: string): void;
  verbose(message: string, context?: string): void;
}
