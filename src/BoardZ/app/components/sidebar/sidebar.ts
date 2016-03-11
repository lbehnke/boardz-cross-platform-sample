import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {LoginService} from '../../services/login.service';
import {CloseSidebarOnClickDirective} from '../../directives/close.sidebar.on.click.directive';
import {NavigationEntry} from "../../models/navigationEntry";

@Component({
    selector: 'sidebar',
    directives: [ROUTER_DIRECTIVES, CloseSidebarOnClickDirective],
    templateUrl: 'app/components/sidebar/sidebar.html'
})
export class Sidebar {
    public expanded: boolean = true;
    public navigationEntries: Array<NavigationEntry>;
    
    constructor() {
        this.navigationEntries = new Array<NavigationEntry>();
        this.navigationEntries.push(new NavigationEntry({ links: "Dashboard", icon: "", displayName: ""}));
        this.navigationEntries.push({ links: "Games", icon: "", displayName: ""});
        this.navigationEntries.push({ links: "", icon: "", displayName: ""});
    }

    toggleSidebar(): void {
        this.expanded = !this.expanded;
    }
}
