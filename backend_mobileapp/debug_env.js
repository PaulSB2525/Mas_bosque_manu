require('dotenv').config();

console.log("VERIFICANDO VARIABLES .env");
console.log("==========================");

// Variables criticas
const criticalVars = [
    'DB_HOST',
    'DB_USER', 
    'DB_PASSWORD',
    'DB_NAME',
    'DB_PORT',
    'NODE_ENV',
    'JWT_SECRET'
];

let missingVars = [];

criticalVars.forEach(varName => {
    const value = process.env[varName];
    if (value) {
        const displayValue = varName.includes('PASSWORD') || varName.includes('SECRET') 
            ? '***' + value.slice(-3) 
            : value;
        console.log("OK  " + varName + "=" + displayValue);
    } else {
        console.log("ERROR " + varName + "=NO DEFINIDO");
        missingVars.push(varName);
    }
});

console.log("\nUBICACION DEL ARCHIVO .env");
console.log("Directorio actual: " + __dirname);

// Verificar si el archivo existe
const fs = require('fs');
const path = require('path');
const envPath = path.join(__dirname, '.env');

if (fs.existsSync(envPath)) {
    console.log("ARCHIVO .env EXISTE");
    
    // Mostrar contenido
    const content = fs.readFileSync(envPath, 'utf8');
    console.log("\nCONTENIDO DE .env:");
    const lines = content.split('\n');
    lines.forEach(line => {
        if (line.trim() && !line.startsWith('#')) {
            const [key, ...valueParts] = line.split('=');
            const value = valueParts.join('=');
            if (key.includes('PASSWORD') || key.includes('SECRET')) {
                console.log(key + "=***" + value.slice(-3));
            } else {
                console.log(line);
            }
        }
    });
} else {
    console.log("ARCHIVO .env NO EXISTE");
}

if (missingVars.length > 0) {
    console.log("\nADVERTENCIA: Faltan " + missingVars.length + " variables criticas");
}