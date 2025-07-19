export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  quantity: number;
  message: string;
}

export interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

export interface ToastOptions {
  type: 'success' | 'error' | 'info' | 'warning';
  message: string;
  duration?: number;
}