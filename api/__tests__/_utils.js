/* global test */
import fs from 'fs'
import { DB_FILE } from '../db/'
import initDbDataGen from '../db/_defaultsGen'

const dbFileInitContent = JSON.stringify(initDbDataGen(), null, 2)

export function resetDbData () {
  fs.writeFileSync(DB_FILE, dbFileInitContent)
}

export function getDbData () {
  return JSON.parse(fs.readFileSync(DB_FILE, 'utf8'))
}

// https://github.com/facebook/jest/issues/7280#issuecomment-433409841
test.skip('skip', () => {})
