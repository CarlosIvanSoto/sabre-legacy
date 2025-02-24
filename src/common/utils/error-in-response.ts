export class ErrorInResponse extends Error {
  constructor(message: string) {
    super(message); // (1)
    this.name = "ErrorInResponse"; // (2)
  };
}
