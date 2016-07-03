'use strict';
import * as vscode from 'vscode';
const exec = require('child_process').exec;
import S_ from './string';
var String_S = S_(vscode.env.language);

class SVNTool_ {
    conf: any;
    canRun = false;
    valid(){
        this.canRun = false;
        if(!this.conf.path || this.conf.path == ""){
            return String_S['VALID_PATH'];
        }
        if(!this.conf.url || this.conf.url == ""){
            return String_S['VALID_URL'];
        }else if(!this.conf.username || this.conf.username == ""){
            return String_S['VALID_UNAME'];
        }else if(!this.conf.password || this.conf.password == ""){
            return String_S['VALID_PWD'];
        }
        this.canRun = true;
    } 
    checkout(callback){
        var message = this.valid();
        if(message){
            callback(message);
            return;
        }
        if(!this.canRun){
            return;
        }
        var cmd = this.conf.path + " co --username "+this.conf.username + " --password "+this.conf.password + " " + this.conf.url + " " + vscode.workspace.rootPath;
        exec(cmd, (error, stdout, stderr) => {
            if (error) {
                callback(String_S['ERROR']);
                return; 
            }
            callback(String_S['CP_CHECKOUT']);
        });
    }
    commit(callback){
        var message = this.valid();
        if(message){
            callback(message);
            return;
        }
        if(!this.canRun){
            return;
        }
        var cmd = this.conf.path + " ci --username "+this.conf.username + " --password "+this.conf.password + " -m '' " + vscode.workspace.rootPath;
        exec(cmd, (error, stdout, stderr) => {
            if (error) {
                callback(String_S['ERROR']);
                return; 
            }
            callback(String_S['CP_COMMIT']);
        });
    }
    update(callback){
        var message = this.valid();
        if(message){
            callback(message);
            return;
        }
        if(!this.canRun){
            return;
        }
        var cmd = this.conf.path + " up --username "+this.conf.username + " --password "+this.conf.password + " " + vscode.workspace.rootPath;
        exec(cmd, (error, stdout, stderr) => {
            if (error) {
                callback(String_S['ERROR']);
                return; 
            }
            callback(String_S['CP_UPDATE']);
        });
    }
}

var svn_ = new SVNTool_();
export default svn_;