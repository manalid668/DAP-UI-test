import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userProfile'
})
export class UserProfilePipe implements PipeTransform {

  transform(username: string): string {
    if (!username) {
      return '';
    } else {
            let firstLetters = '';
            const words = username.split(' ');
            for (const word of words) {
              firstLetters = firstLetters.concat(word[0]);
            }
            return firstLetters;
        }
    }
  }

