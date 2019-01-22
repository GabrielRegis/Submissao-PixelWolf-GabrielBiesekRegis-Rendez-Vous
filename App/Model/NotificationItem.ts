export interface NotificationItem {
    key: number;
    title: string;
    subTitle: string;
    buttonEvent: () => void;
}
