import React from 'react';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error, resetErrorBoundary }) => {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 text-center">
        <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="w-10 h-10 text-red-400" />
        </div>
        
        <h2 className="text-2xl font-bold text-white mb-4">
          Oops! Terjadi Kesalahan
        </h2>
        
        <p className="text-gray-400 mb-6">
          Maaf, terjadi kesalahan yang tidak terduga. Tim kami telah diberitahu dan sedang menangani masalah ini.
        </p>
        
        <div className="bg-red-500/10 rounded-lg p-4 mb-6 text-left">
          <p className="text-red-300 text-sm font-mono">
            {error.message}
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={resetErrorBoundary}
            className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
          >
            <RefreshCw className="w-4 h-4" />
            Coba Lagi
          </button>
          
          <button
            onClick={() => window.location.href = '/'}
            className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            <Home className="w-4 h-4" />
            Beranda
          </button>
        </div>
        
        <div className="mt-6 pt-6 border-t border-white/10">
          <p className="text-gray-500 text-sm">
            Butuh bantuan? Hubungi kami di{' '}
            <a 
              href="https://wa.me/6281234567890" 
              className="text-blue-400 hover:text-blue-300"
            >
              WhatsApp
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

const logError = (error: Error, errorInfo: { componentStack: string }) => {
  // Log error to your error reporting service
  console.error('Error Boundary caught an error:', error, errorInfo);
  
  // You can integrate with services like Sentry, LogRocket, etc.
  // Example: Sentry.captureException(error, { contexts: { react: errorInfo } });
};

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children }) => {
  return (
    <ReactErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={logError}
      onReset={() => {
        // Clear any cached data or reset application state
        window.location.reload();
      }}
    >
      {children}
    </ReactErrorBoundary>
  );
};

export default ErrorBoundary;