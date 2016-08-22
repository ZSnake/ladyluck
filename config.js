module.exports = {
    databaseUrl: function(){
        return process.env.database ? ~~process.env.database : 'localhost:27017/ladyluck'
    }
}