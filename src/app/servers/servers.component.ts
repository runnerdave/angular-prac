import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Testserver'
  userName = '';
  isUserNameEmpty: boolean;

  constructor() {
    if (this.userName.length > 0) {
      this.isUserNameEmpty = false;
    } else {
      this.isUserNameEmpty = true;
    }
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onUpdateUserName($event: Event) {
    this.userName = (<HTMLInputElement>event.target).value
    if (this.userName.length > 0) {
      this.isUserNameEmpty = false;
    } else {
      this.isUserNameEmpty = true;
    }
  }

  onCreateServer() {
    this.serverCreationStatus = `Server was created! Server name: ${this.serverName}`;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value
  }
}
