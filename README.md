# Telegram Bot

A Telegram bot built with [Telegraf](https://telegraf.js.org/) and [Bun](https://bun.sh/).

## Prerequisites

- [Bun](https://bun.sh/) runtime installed
- A Telegram bot token from [@BotFather](https://t.me/BotFather)

## Installation

```bash
bun install
```

## Configuration

Set your bot token as an environment variable:

```bash
export BOT_TOKEN="your-bot-token-here"
```

Or create a `.env` file:

```
BOT_TOKEN=your-bot-token-here
```

## Usage

### Development

Run with hot reload:

```bash
bun run dev
```

### Production

```bash
bun run start
```

## Available Commands

| Command   | Description        |
| --------- | ------------------ |
| `/start`  | Start the bot      |
| `/help`   | Show help message  |
| `/hello`  | Get a greeting     |

## Scripts

| Script          | Description                          |
| --------------- | ------------------------------------ |
| `bun run dev`   | Run with hot reload                  |
| `bun run start` | Run in production mode               |
| `bun run test`  | Run tests                            |
| `bun run lint`  | Lint with oxlint                     |
| `bun run lint:fix` | Lint and fix issues               |
| `bun run format` | Format code with oxfmt              |
| `bun run format:check` | Check code formatting         |

## Tech Stack

- **Runtime**: Bun
- **Framework**: Telegraf
- **Language**: TypeScript
- **Linting**: oxlint
- **Formatting**: oxfmt
- **Git Hooks**: Husky (pre-commit: lint + format)

## License

ISC
