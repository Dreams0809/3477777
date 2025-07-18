export function ensureAuth(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ message: 'Unauthorized' });
}

export function ensureGuest(req, res, next) {
  if (!req.isAuthenticated()) {
    return next();
  }
  res.redirect('/dashboard');
}