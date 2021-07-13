import { createConnection } from "Typeorm"; 

const ormOptions: any = {
    type: 'mysql',
    host: 'localhost',
    port: '3306',
    username: 'root',
    password: '',
    database: 'test',
    timezone: 'Z',
    logging: ["query", "error"],
    entities: ['entity/**/*.ts'],
    migrations: ['migration/**/*.ts'],
    migrationRun: true
};

createConnection(ormOptions)
    .then((value: any) => {
        console.log('3306: [SUCCESS] Databases connected!');
    })
    .catch((error: any) => {
        console.log('3306: [ERROR] Database error');
        console.log(`ERROR: ${error}`);
    });