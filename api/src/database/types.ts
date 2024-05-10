export interface Log {
  event: string;
  ticket: {
    ref: string;
    firstname: string;
    lastname: string;
  };
  metadata: {
    agoda_badge?: string;
  };
  loggedAt: Date;
}
