import path from 'path'
import lowdb from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync'
import defaultsGen from './_defaultsGen'

const db = lowdb(new FileSync(
  path.join(__dirname, 'db.json')
))

db.defaults(defaultsGen()).write()

export default db
