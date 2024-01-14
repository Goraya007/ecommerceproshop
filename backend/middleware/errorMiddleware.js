const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error); // This will be caught by the error handler
}

const errorHandler = (err, req, res, next) => {
    // Sometimes the error may have a status code, if not set it to 500
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
   
    if (err.name === 'CastError' && err.kind === 'ObjectId') {
        message = 'Not Found';
        statusCode = 404;
    }   
    res.status(statusCode);
    res.json({
        message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    });


}

export { notFound, errorHandler };