export class FaultError extends Error {
  constructor(message: string) {
    super(message); // (1)
    this.name = "FaultError"; // (2)
  };
}
