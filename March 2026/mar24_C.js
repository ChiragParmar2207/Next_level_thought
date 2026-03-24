/**
 * Graceful Shutdown
 * A graceful shutdown means stopping a Node.js application safely when the process receives a termination signal,
 * without losing data or interrupting active requests unexpectedly.
 *
 * Instead of killing the server immediately, the application
 * => Stops accepting new requests
 * => Finishes ongoing requests
 * => Closes database connections
 * => Releases resources
 * => Exits cleanly
 */

/**
 * SIGINT (Signal Interrupt)
 * It usually happens when a user manually stops a process from terminal.
 * Most common way to trigger graceful shutdown is ctrl + c
 * User-driven interrupt
 */

/**
 * SIGTERM (Signal Terminate)
 * This signal usually comes from another process or system tool.
 * Common sources
 * => Docker stopping container
 * => Kubernetes restarting pod
 * => PM2 restarting process
 * => Linux kill command kill PID
 * System-driven termination
 */

/**
 * SIGINT is generated when a user interrupts the process manually, usually with Ctrl+C.
 * SIGTERM is sent by the operating system or process managers to request graceful termination.
 * In Node.js both signals are commonly handled to safely close servers, database connections, and release resources before exiting.
 */

const express = require('express');
// const mongoose = require('mongoose');

const app = express();

const server = app.listen(3000, () => {
	console.log('Server started on 3000');
});

const shutdown = async (signal) => {
	console.log(`${signal} received`);

	server.close(async () => {
		console.log('Server closed');

		// await mongoose.connection.close();
		console.log('MongoDB disconnected');

		process.exit(0);
	});

	setTimeout(() => {
		console.error('Force shutdown');
		process.exit(1);
	}, 10000);
};

process.on('SIGINT', () => shutdown('SIGINT'));
process.on('SIGTERM', () => shutdown('SIGTERM'));
