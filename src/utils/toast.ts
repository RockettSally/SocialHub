import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Injectable()
export class Toast {

    loader: any = null;

    constructor(private toastCtrl: ToastController) {
    }

    private presentToast(toastMsg, toastPosition, toastTime, toastDismiss) {
        let toast = this.toastCtrl.create({
            message: toastMsg,
            duration: toastTime,
            position: toastPosition,
            showCloseButton: toastDismiss,
            closeButtonText: 'X'
            
        });
        toast.present();
    }
    
    public showPromptToast(message) {
        this.presentToast(message, 'bottom', 5000, true);
    }
    
    public showQuickToast(message) {
        this.presentToast(message, 'bottom', 1500, false);
    }
    
    public showMiddleToast(message) {
        this.presentToast(message, 'middle', 2000, false);
    }
    
    public showTopToast(message) {
        this.presentToast(message, 'top', 2000, false);
    }
}