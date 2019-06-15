import path from 'path'
import lowdb from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync'
import defaultsGen from './_defaultsGen'

export const DB_FILE = path.join(__dirname, 'db.json')

const db = lowdb(new FileSync(DB_FILE))
db.defaults(defaultsGen()).write()

export default db
