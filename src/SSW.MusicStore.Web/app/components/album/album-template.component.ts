import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Album, User} from '../../models';
import {tokenNotExpired} from 'angular2-jwt';

@Component({
    selector: 'album-template',
    styleUrls: [
        'app/components/album/album-template.component.css'
    ],
    templateUrl: 'app/components/album/album-template.component.html'
})
export class AlbumTemplate {
    @Input() album: Album;
    @Input() user: User;
    @Output('selected') selected = new EventEmitter();

    onSelect(album) {
        this.selected.next(album);
    }
    
   loggedIn() {
    return tokenNotExpired();
  }
}
