import { toast } from 'bulma-toast'

/**
 * @param {string|Error} err
 */
export default function (err) {
  toast({
    type: 'is-danger',
    message: typeof err === 'string' ? err : err.message,
    duration: 10000,
    dismissible: true,
    pauseOnHover: true,
    closeOnClick: false
  })
  console.error(err)
  // TODO: Sentry.captureException, etc
}
