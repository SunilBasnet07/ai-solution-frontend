'use client';

import { useEffect, useState } from 'react';
import { X, Image as ImageIcon, User, Type, Tag, FileText } from 'lucide-react';
import { editBlog } from '@/api/blog';
import { useDispatch } from 'react-redux';
import { setBlogStatus } from '@/redux/blog/blogSlice';
import { toast } from 'react-toastify';

export default function EditBlogPostModal({ isOpen, onClose, blog }) {
  const [form, setForm] = useState({
    title: '',
    category: '',
    description: '',
    author: '',
    imageUrl: null,
  });
  const [previewUrl, setPreviewUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isOpen && blog) {
      setForm({
        title: blog.title || '',
        category: blog.category || '',
        description: blog.description || '',
        author: blog.author || '',
        imageUrl: null,
      });
      setPreviewUrl(blog.image || '');
    } else if (!isOpen) {
      setForm({ title: '', category: '', description: '', author: '', imageUrl: null });
      setPreviewUrl('');
    }
  }, [isOpen, blog]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setForm((prev) => ({ ...prev, imageUrl: file }));
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!blog?._id) return;

    const formdata = new FormData();
    formdata.append('title', form.title);
    formdata.append('category', form.category);
    formdata.append('description', form.description);
    formdata.append('author', form.author);
    if (form.imageUrl) {
      formdata.append('image', form.imageUrl);
    }

    try {
      setLoading(true);
      await editBlog(blog._id, formdata);
      toast.success('Blog updated', { autoClose: 1500 });
      dispatch(setBlogStatus('edited'));
      onClose && onClose();
    } catch (error) {
      toast.error(error?.response?.data || 'Failed to edit blog');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative bg-white w-full max-w-2xl mx-4 rounded-2xl shadow-xl border border-slate-200 max-h-[85vh] flex flex-col">
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 flex-shrink-0">
          <h3 className="text-lg font-semibold text-slate-900">Edit Blog Post</h3>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-soslate-100">
            <X className="w-5 h-5 text-slate-600" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5 overflow-y-auto">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Title</label>
            <div className="relative">
              <Type className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Enter post title"
                className="w-full pl-10 pr-3 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Category</label>
              <div className="relative">
                <Tag className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  placeholder="e.g., AI Trends"
                  className="w-full pl-10 pr-3 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Author</label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  name="author"
                  value={form.author}
                  onChange={handleChange}
                  placeholder="Author name"
                  className="w-full pl-10 pr-3 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Description</label>
            <div className="relative">
              <FileText className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Write a short description..."
                rows={4}
                className="w-full pl-10 pr-3 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Cover Image</label>
            <div className="flex items-center gap-4">
              <label className="flex items-center justify-center w-full md:w-1/2 h-32 border-2 border-dashed border-slate-300 rounded-lg cursor-pointer hover:border-blue-400 transition-colors">
                <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
                <div className="text-center">
                  {previewUrl ? (
                    <img src={previewUrl} alt="preview" className="h-28 mx-auto object-cover rounded" />
                  ) : (
                    <div className="flex flex-col items-center text-slate-500">
                      <ImageIcon className="w-8 h-8 mb-2" />
                      <span className="text-sm">Click to upload</span>
                    </div>
                  )}
                </div>
              </label>
              <div className="hidden md:block text-sm text-slate-500 w-1/2">
                Recommended: 1200x630 JPG/PNG. Max 2MB.
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 pt-2 sticky bottom-0 bg-white">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50">
              Cancel
            </button>
            <button disabled={loading} type="submit" className="px-4 py-2 disabled:cursor-not-allowed disabled:bg-slate-400 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
              {loading ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}


