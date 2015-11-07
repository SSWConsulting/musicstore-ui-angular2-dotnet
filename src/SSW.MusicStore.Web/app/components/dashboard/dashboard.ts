import {Component, CORE_DIRECTIVES, OnInit} from 'angular2/angular2';
import {Router} from 'angular2/router';
import {Album} from '../../models';
import {AlbumService} from '../../services/album.service';
import {Routes} from '../../route.config';
import {AlbumSummary} from '../album/album-summary';
import {TypeAhead} from '../search/search';

@Component({
    selector: 'dashboard',
    templateUrl: './components/dashboard/dashboard.html',
    styleUrls: ['./components/dashboard/dashboard.css'],
    directives: [CORE_DIRECTIVES, AlbumSummary, TypeAhead  ]
})
export class DashboardComponent implements OnInit {
    public albums: Album[];
    searching: boolean;

    constructor(private _albumService: AlbumService, private _router: Router) {
    }

    onInit() {
        return this.albums = this.getPopularAlbums();
    }

    hide() {
        this.searching = true;
        alert(this.searching);
    }

    goToAlbumDetail(album: Album) {
        this._router.navigate([`/${Routes.album.as}`, { id: album.albumId }]);
    }

    getPopularAlbums() {
        this._albumService.getPopularAlbums()
            .then(albums =>
                this.albums = albums
            );

        return this.albums;
    }
}
