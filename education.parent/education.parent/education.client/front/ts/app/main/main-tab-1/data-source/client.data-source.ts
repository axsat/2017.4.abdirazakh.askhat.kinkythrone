import {CollectionViewer, DataSource} from "@angular/cdk/collections";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import {ClientInfo} from "../../../../model/main.main-tab-1/ClientInfo";
import {HttpService} from "../../../../service/HttpService";
import {ClientListDetails} from "../../../../model/main.main-tab-1/ClientListDetails";

export class ClientDataSource extends DataSource<any>{

    constructor(private httpService:HttpService){
        super();
    }

    connect(collectionViewer: CollectionViewer): Observable<ClientInfo[]> {
        return this.httpService.post("/client/list",{}).map(ret=>{
            let res = ret.json() as ClientListDetails;
            return res.clientInfoList;
        });
    }

    disconnect(collectionViewer: CollectionViewer): void {

    }

}
