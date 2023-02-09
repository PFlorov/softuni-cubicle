exports.handleRequest = (handler) => {
  return async (req, res, next) => {
    try {
      await handler(req, res);
    } catch {
      next(err);
    }
  };
};
