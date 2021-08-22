const MIN_RAND = 0;
const MAX_RAND = 10;

export class UserApproveService {
  async approve(): Promise<boolean> {
    setTimeout(() => {}, 15000);

    return this.getRandomInt() > 5;
  }

  private getRandomInt() {
    return Math.floor(Math.random() * (MAX_RAND - MIN_RAND + 1)) + MIN_RAND;
  }
}
