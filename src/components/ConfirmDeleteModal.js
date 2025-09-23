'use client';

import { X, Trash2 } from 'lucide-react';

export default function ConfirmDeleteModal({ isOpen, title = 'Delete Blog Post', message = 'Are you sure you want to delete this blog post? This action cannot be undone.', confirmText = 'Delete', cancelText = 'Cancel', onClose, onConfirm, loading = false }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative bg-white w-full max-w-md mx-4 rounded-2xl shadow-xl border border-slate-200">
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200">
          <h3 className="text-base font-semibold text-slate-900">{title}</h3>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-slate-100">
            <X className="w-5 h-5 text-slate-600" />
          </button>
        </div>

        <div className="px-5 py-4 text-slate-600">
          {message}
        </div>

        <div className="px-5 py-4 flex items-center justify-end gap-3 border-t border-slate-200">
          <button onClick={onClose} className="px-4 py-2 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50" disabled={loading}>
            {cancelText}
          </button>
          <button onClick={onConfirm} className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-2" disabled={loading}>
            <Trash2 className="w-4 h-4" />
            {loading ? 'Deleting...' : confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}
