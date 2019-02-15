
import { Component, OnDestroy, OnInit } from '@angular/core';

import {
    VisEdges,
    VisNetworkData,
    VisNetworkOptions,
    VisNetworkService,
    VisNode,
    VisNodes } from 'ngx-vis';

class ExampleNetworkData implements VisNetworkData {
    public nodes: VisNodes;
    public edges: VisEdges;
}

@Component({
    selector: 'app-vis-comp',
    styles: [
      `.network-canvas {
          width: 100%;
          height: 750px;
          border: 4px solid lightgray;
      }`,
    ],
    // template: `<p> Hello World </p>`,
    template: `./vis-comp.component.html`
    // `
    //   <h2>Network</h2>
    //   <h3>Basic usage</h3>
    //   <div class="network-canvas"
    //     [visNetwork]="visNetwork"
    //     [visNetworkData]="visNetworkData"
    //     [visNetworkOptions]="visNetworkOptions"
    //     (initialized)="networkInitialized()"></div>
    //   <button type="button" class="btn btn-default" (click)="addNode()">Add node</button>
    //   <p>
    //     <strong>Note:</strong> Open your dev tools to see the console output when the network receives click events.
    //   </p>
    // `,
})
export class VisCompComponent implements OnInit, OnDestroy {

    public visNetwork: string = 'networkId1';
    public visNetworkData: ExampleNetworkData;
    public visNetworkOptions: VisNetworkOptions;

    public constructor(private visNetworkService: VisNetworkService) { }

    public addNode(): void {
        const newId = this.visNetworkData.nodes.getLength() + 1;
        this.visNetworkData.nodes.add({ id: newId.toString(), label: 'Node ' + newId });
        this.visNetworkService.fit(this.visNetwork);
    }

    public addEdge(): void {

    }

    public networkInitialized(): void {
        // now we can use the service to register on events
        this.visNetworkService.on(this.visNetwork, 'click');

        // open your console/dev tools to see the click params
        this.visNetworkService.click
            .subscribe((eventData: any[]) => {
                if (eventData[0] === this.visNetwork) {
                  console.log(eventData[1]);
                }
            });
    }

    public ngOnInit(): void {
        let nodeList = []
        for (let i = 0; i < 10; i++){
          nodeList.push({ id: `${i}`, label: `Node ${i}`})
        }
        const nodes = new VisNodes(nodeList)
        // ([
        //     { id: '1', label: 'Node 1' },
        //     { id: '2', label: 'Node 2' },
        //     { id: '3', label: 'Node 3' },
        //     { id: '4', label: 'Node 4' },
        //     { id: '5', label: 'Node 5', title: 'Title of Node 5' },
        //     { id: '6', label: 'Test Node'}]);
        let nodeEdges = []
        for (let i = 0; i < nodeList.length; i++){
          nodeEdges.push({ from: `${i}`, to: `${i+1}`})
        }
        const edges = new VisEdges(nodeEdges)
        // ([
        //     { from: '1', to: '3' },
        //     { from: '1', to: '2' },
        //     { from: '2', to: '4' },
        //     { from: '2', to: '5' },
        //     {from: '6', to: '5'}]);

        this.visNetworkData = {
            nodes,
            edges,
        };

        this.visNetworkOptions = {};
    }

    public ngOnDestroy(): void {
        this.visNetworkService.off(this.visNetwork, 'click');
    }
}