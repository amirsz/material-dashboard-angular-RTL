import {  RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'داشبورد کاربری',  icon: 'dashboard', class: '' },
    { path: 'user', title: 'پروفایل کاربر',  icon:'person', class: '' },
    { path: 'table', title: 'جداول',  icon:'content_paste', class: '' },
    { path: 'typography', title: 'تایپوگرافی',  icon:'library_books', class: '' },
    { path: 'icons', title: 'آیکن ها',  icon:'bubble_chart', class: '' },
    { path: 'maps', title: 'نقشه',  icon:'location_on', class: '' },
    { path: 'notifications', title: 'پیام های هشدار',  icon:'notifications', class: '' },
    // { path: 'upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
];
