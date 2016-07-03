'use strict';

import * as vscode from 'vscode';
import svn from './svn';

var canRun = false;
svn.conf = vscode.workspace.getConfiguration("svntool");
var local = vscode.env.language; 

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(vscode.commands.registerCommand('extension.svnCO', () => {
        svn.checkout((msg) => {
            vscode.window.showInformationMessage(msg);
        });
    }));
    context.subscriptions.push(vscode.commands.registerCommand('extension.svnCI', () => {
        svn.commit((msg) => {
            vscode.window.showInformationMessage(msg);
        });
    }));
    context.subscriptions.push(vscode.commands.registerCommand('extension.svnUP', () => {
        svn.update((msg) => {
            vscode.window.showInformationMessage(msg);
        });
    }));
}

// this method is called when your extension is deactivated
export function deactivate() {
}



