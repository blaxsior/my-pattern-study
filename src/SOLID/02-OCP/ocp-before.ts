class UserNotification {
    public sendAdInfo(target: NotificationTarget) {
        switch(target) {
            case "mail":
                //by mail
                break;
            case "message":
                // by message
                break;
            case "app":
                // app push
                break;
        }
    }

    public sendOTP(target: NotificationTarget) {
        switch(target) {
            case "mail":
                //by mail
                break;
            case "message":
                // by message
                break;
            case "app":
                // app push
                break;
        }
    }

    public sendReceipt(target: NotificationTarget) {
        switch(target) {
            case "mail":
                //by mail
                break;
            case "message":
                // by message
                break;
            case "app":
                // app push
                break;
        }
    }
}

type NotificationTarget = 'mail'|'message'|'app';

interface INotificationMedium {
    sendAdInfo(): void;
    sendOTP(): void;
    sendReceipt(): void;
}

class MailMedium implements INotificationMedium {
    sendAdInfo() {//by mail
    }
    sendOTP() {//by mail
    }
    sendReceipt() {//by mail
    }
}

class MessageMedium implements INotificationMedium {
    sendAdInfo() {//by message
    }
    sendOTP() {//by message
    }
    sendReceipt() {//by message
    }
}

class AppMedium implements INotificationMedium {
    sendAdInfo() {//by app push
    }
    sendOTP() {//by app push
    }
    sendReceipt() {//by app push
    }
}

class UserNotification2 {
    public sendAdInfo(target: INotificationMedium) {
        target.sendAdInfo();
    }

    public sendOTP(target: INotificationMedium) {
        target.sendOTP();
    }

    public sendReceipt(target: INotificationMedium) {
        target.sendReceipt
    }
}