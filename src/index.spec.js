const context = require.context('./app', true, /\.(js|jsx|ts|tsx)$/);
context.keys().forEach(context);
