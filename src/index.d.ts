declare module Express {
  interface Request {
    myProps?: any;
    requestedAt?: Date;
  }
}
