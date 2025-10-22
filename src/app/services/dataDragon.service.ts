import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})


export class RiotService {

    private ddragonBase = 'https://ddragon.leagueoflegends.com/cdn' //-- Este para sacar la data estatica del servidor (imagenes, items, campeones, descripciones, etc).
    private version = '14.20.1' //--Se puede hacer fetch a diferentes versiones, anteriores a la ultima.
    private liveClientUrl = 'https://127.0.0.1:2999/liveclientdata/allgamedata'; //-- Este saca la data del cliente cuando juego, mientras este la ventana del cliente abierta.


    constructor(private http: HttpClient) { }


    getChampionsData(): Observable<any> { //--Trae los campeones.
        return this.http.get(`${this.ddragonBase}/${this.version}/data/es_ES/champion.json`)
    }


    getChampionData(championName: string): Observable<any> { //--Trae un solo campeón
        return this.http.get(`${this.ddragonBase}/${this.version}/data/es_ES/${championName}.json`)
        .pipe(map((res: any) => res.data[championName]))
    }


    getChampionImage(championName: string): string { //--Trae imagen del campeón
        return `${this.ddragonBase}/${this.version}/img/champion/${championName}.png`
    }



    getItemData(): Observable<any> { //--Trae los items.
        return this.http.get(`${this.ddragonBase}/${this.version}/data/es_ES/item.json`)
    }


    getLiveClientData(): Observable<any> { //--Trae data del cliente actual.
        return this.http.get(this.liveClientUrl, { withCredentials: false })
    }




}