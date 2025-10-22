import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})


export class RiotService {

    private ddragonBase = 'https://ddragon.leagueoflegends.com/cdn'
    private version = '14.20.1' //Se puede hacer fetch a diferentes versiones, anteriores a la ultima
    private liveClientUrl = 'https://127.0.0.1:2999/liveclientdata/allgamedata';


    constructor(private http: HttpClient){

    }


    getChampionData(): Observable<any>{
        return this.http.get(`${this.ddragonBase}/${this.version}/data/es_ES/champion.json`)
    }
    
    
    getItemData(): Observable<any>{
        return this.http.get(`${this.ddragonBase}/${this.version}/data/es_ES/item.json`)
    }


    getLiveClientData(): Observable<any>{
        return this.http.get(this.liveClientUrl, {withCredentials: false})
    }




}