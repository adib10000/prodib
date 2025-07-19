import React from 'react';
import toast, { Toaster, Toast as HotToast } from 'react-hot-toast';
import { CheckCircle, XCircle, AlertCircle, Info, X } from 'lucide-react';

const iconMap = {
  success: CheckCircle,
  error: XCircle,
  warning: AlertCircle,
  info: Info,
};

const colorMap = {
  success: 'text-green-400 bg-green-500/20 border-green-500/30',
  error: 'text-red-400 bg-red-500/20 border-red-500/30',
  warning: 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30',
  info: 'text-blue-400 bg-blue-500/20 border-blue-500/30',
};

interface CustomToastProps {
  t: HotToast;
  type: keyof typeof iconMap;
  message: string;
}

const CustomToast: React.FC<CustomToastProps> = ({ t, type, message }) => {
  const Icon = iconMap[type];
  
  return (
    <div
      className={`${
        t.visible ? 'animate-enter' : 'animate-leave'
      } max-w-md w-full bg-slate-800/90 backdrop-blur-sm shadow-lg rounded-2xl pointer-events-auto flex ring-1 ring-black ring-opacity-5 border ${colorMap[type]}`}
    >
      <div className="flex-1 w-0 p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <Icon className={`h-6 w-6 ${colorMap[type].split(' ')[0]}`} />
          </div>
          <div className="ml-3 flex-1">
            <p className="text-sm font-medium text-white">
              {message}
            </p>
          </div>
        </div>
      </div>
      <div className="flex border-l border-gray-700">
        <button
          onClick={() => toast.dismiss(t.id)}
          className="w-full border border-transparent rounded-none rounded-r-2xl p-4 flex items-center justify-center text-sm font-medium text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

// Toast utility functions
export const showToast = {
  success: (message: string) =>
    toast.custom((t) => <CustomToast t={t} type="success" message={message} />),
  
  error: (message: string) =>
    toast.custom((t) => <CustomToast t={t} type="error" message={message} />),
  
  warning: (message: string) =>
    toast.custom((t) => <CustomToast t={t} type="warning" message={message} />),
  
  info: (message: string) =>
    toast.custom((t) => <CustomToast t={t} type="info" message={message} />),
};

// Toast container component
export const ToastContainer = () => {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 4000,
        style: {
          background: 'transparent',
          boxShadow: 'none',
        },
      }}
    />
  );
};

export default CustomToast;