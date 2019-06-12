// Refer to https://gist.github.com/zcaceres/2854ef613751563a3b506fabce4501fd

export function resThrow (req, res, next) {
  res.throw = (msg, code) => {
    const err = new Error(msg)
    if (code) {
      err.statusCode = code
    }
    next(err)
  }
  next()
}

export function notFound (req, res, next) {
  res.throw(`${req.originalUrl} NOT FOUND`, 404)
}

export function errHandler (err, req, res, next) {
  if (process.env.NODE_ENV === 'development') {
    console.error(err)
  } // else { TODO: Sentry.captureException, etc }
  const code = err.statusCode || 500
  res
    .status(code)
    .json({ code, message: err.message })
}
