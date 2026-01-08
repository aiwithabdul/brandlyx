import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
}

export function GlassInput({ label, error, className = '', ...props }: InputProps) {
    return (
        <div className="space-y-2">
            {label && (
                <label className="block text-sm font-medium text-slate-300">
                    {label}
                </label>
            )}
            <input
                className={`glass-input ${error ? 'border-red-500' : ''} ${className}`}
                {...props}
            />
            {error && (
                <p className="text-sm text-red-400">{error}</p>
            )}
        </div>
    );
}

export function GlassTextarea({ label, error, className = '', ...props }: TextareaProps) {
    return (
        <div className="space-y-2">
            {label && (
                <label className="block text-sm font-medium text-slate-300">
                    {label}
                </label>
            )}
            <textarea
                className={`glass-input min-h-[150px] resize-y ${error ? 'border-red-500' : ''} ${className}`}
                {...props}
            />
            {error && (
                <p className="text-sm text-red-400">{error}</p>
            )}
        </div>
    );
}
