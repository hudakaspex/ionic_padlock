import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the BytesToStringPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'bytesToString',
})
export class BytesToStringPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(buffer: any) {
    return String.fromCharCode.apply(null, new Uint8Array(buffer));
  }
}
