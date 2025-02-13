import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nm_util_filter_boolean',
  pure: false
})
export class util_filter_boolean_pipe implements PipeTransform {

  transform<T>(value: T[] | null | undefined, ...args: string[]): T[] {
    const key = args[0] ?? 'selected';
    return value?.filter(x => (<any>x)[key]===true) ?? [];
  }

}
