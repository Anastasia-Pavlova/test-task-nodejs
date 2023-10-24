import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly data: string[] = ['test'];

  getLocus(): string[] {
    return this.data;
  }
}
