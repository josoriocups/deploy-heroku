const config = {
    dbUrl: process.env.DB_URL || 'mongodb+srv://admin:admin@cluster0.7j1ro.gcp.mongodb.net/test',
    port: process.env.PORT || 5000,
    host: process.env.HOST || 'http://localhost',
    publicRoute: process.env.PUBLIC_ROUTE || '/',
    filesRoute: process.env.FILES_ROUTE || 'files',
}

module.exports = config