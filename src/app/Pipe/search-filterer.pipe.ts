import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilterer'
})
export class SearchFiltererPipe implements PipeTransform {

  transform(value: any, searchDataInput: string)
  {

    if (value == null){
      return value;
    }

    const Message = [];
    for(const notes of value) {
      if(notes.title.includes(searchDataInput) || notes.description.includes(searchDataInput)) {
        Message.push(notes)
      }
    }


    
    return Message;

  }

}
