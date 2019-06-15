/* global it, expect */
import saltedPwdHash from '../saltedPwdHash'
import { ADMIN_USER } from '~/api/config'

it('saltedPwdHash', () => {
  expect(saltedPwdHash(ADMIN_USER)).toBe('aa162ad7c1abc4596c95768da221ea2db79c0582280b0bac2232166a4eaeb81d4ce8176f6345a3df90bc751e408af8c985b4f0b11924b26f70298764aa5cf020')
})
