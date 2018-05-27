import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the StringToBytesPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'stringToBytes',
})
export class StringToBytesPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string) {
    var array = new Uint8Array(value.length);
    for (var i = 0, l = value.length; i < l; i++) {
        array[i] = value.charCodeAt(i);
     }
     return array.buffer;
  }
}
