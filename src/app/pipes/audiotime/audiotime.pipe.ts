import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'audiotime'
})
export class AudiotimePipe implements PipeTransform {

  transform(t: any, args?: any): any {
    const m: number = ~~(t/60)
    const s: number = ~~(t % 60);
    return (m<10?""+m:m)+':'+(s<10?"0"+s:s);
  }

}
