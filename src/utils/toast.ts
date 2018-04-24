import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Injectable()
export class Toast {

    loader: any = null;

    constructor(private toastCtrl: ToastController) {
    }

    private presentToast(toastMsg, toastPosition) {
        let toast = this.toastCtrl.create({
            message: toastMsg,
            duration: 4000,
            position: toastPosition,
            showCloseButton: true,
            
        });
        
        toast.present();
    }
    
    // private hideLoadingHandler() {
    //     if (this.loader != null) {
    //         this.loader.dismiss();
    //         this.loader = null;
    //     }
    // }
    
    // public showStandardLoader() {
    //     let message = "Por favor aguarde...";
    //     this.showLoadingHandler(message);
    // }

    // public showLoader(message) {
    //     this.showLoadingHandler(message);
    // }

    // public hideLoader() {
    //     this.hideLoadingHandler();
    // }

}