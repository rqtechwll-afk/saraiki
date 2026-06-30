/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { Search, ChevronRight, BookOpen, Clock, Heart, Eye, MessageSquare, Share2, ArrowLeft, Send, Sparkles, User, BadgeAlert } from 'lucide-react';
import { BlogPost, Comment } from '../types';
import { blogData as initialBlogs } from '../data/blogData';

interface BlogSystemProps {
  onNavigate: (tabId: string, subId?: string) => void;
  searchFilterQuery?: string;
  onClearSearchFilter?: () => void;
}

export default function BlogSystem({ onNavigate, searchFilterQuery, onClearSearchFilter }: BlogSystemProps) {
  const [blogs, setBlogs] = useState<BlogPost[]>(initialBlogs);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [searchQuery, setSearchQuery] = useState(searchFilterQuery || '');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeTag, setActiveTag] = useState<string | null>(null);

  // Comment Form State
  const [commentName, setCommentName] = useState('');
  const [commentEmail, setCommentEmail] = useState('');
  const [commentContent, setCommentContent] = useState('');
  const [commentSuccess, setCommentSuccess] = useState(false);

  const categories = ['All', 'History', 'Tourism', 'Poetry', 'Lifestyle', 'Events', 'Heritage'];

  // All unique tags compiled
  const allTags = useMemo(() => {
    const tagsSet = new Set<string>();
    blogs.forEach(post => post.tags.forEach(tag => tagsSet.add(tag)));
    return Array.from(tagsSet);
  }, [blogs]);

  // Handle Search Input from External props
  React.useEffect(() => {
    if (searchFilterQuery) {
      setSearchQuery(searchFilterQuery.replace('search:', ''));
      setSelectedPost(null);
    }
  }, [searchFilterQuery]);

  const filteredBlogs = useMemo(() => {
    return blogs.filter(post => {
      const matchesSearch = searchQuery 
        ? (post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
           post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
           post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()))
        : true;
      const matchesCategory = activeCategory === 'All' ? true : post.category === activeCategory;
      const matchesTag = activeTag ? post.tags.includes(activeTag) : true;
      return matchesSearch && matchesCategory && matchesTag;
    });
  }, [blogs, searchQuery, activeCategory, activeTag]);

  const handleLike = (postId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setBlogs(prev => prev.map(post => {
      if (post.id === postId) {
        return { ...post, likes: post.likes + 1 };
      }
      return post;
    }));
    if (selectedPost && selectedPost.id === postId) {
      setSelectedPost(prev => prev ? { ...prev, likes: prev.likes + 1 } : null);
    }
  };

  const handlePostClick = (post: BlogPost) => {
    // Increment views
    setBlogs(prev => prev.map(p => p.id === post.id ? { ...p, views: p.views + 1 } : p));
    setSelectedPost({ ...post, views: post.views + 1 });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPost || !commentName || !commentEmail || !commentContent) return;

    const newComment: Comment = {
      id: `comm_${Date.now()}`,
      author: commentName,
      email: commentEmail,
      content: commentContent,
      date: new Date().toISOString().split('T')[0],
      approved: true // Auto approved in sandbox
    };

    setBlogs(prev => prev.map(post => {
      if (post.id === selectedPost.id) {
        return { ...post, comments: [newComment, ...post.comments] };
      }
      return post;
    }));

    setSelectedPost(prev => prev ? { ...prev, comments: [newComment, ...prev.comments] } : null);
    
    setCommentName('');
    setCommentEmail('');
    setCommentContent('');
    setCommentSuccess(true);
    setTimeout(() => setCommentSuccess(false), 5000);
  };

  const handleShare = (post: BlogPost, e: React.MouseEvent) => {
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href
      }).catch(err => console.log(err));
    } else {
      alert(`Copied link to clipboard!\nhttps://saraikiculture.com/blog/${post.id}`);
    }
  };

  return (
    <div id="blog-system-page" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Blog Reading Post View */}
      {selectedPost ? (
        <article className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <button
            onClick={() => {
              setSelectedPost(null);
              if (onClearSearchFilter) onClearSearchFilter();
            }}
            className="flex items-center gap-1.5 text-xs font-bold text-stone-600 dark:text-zinc-400 hover:text-saraiki-maroon transition"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Blog Listing
          </button>

          {/* Header Metadata */}
          <div className="space-y-4">
            <span className="text-[10px] font-extrabold uppercase bg-maroon-50 text-saraiki-maroon px-3 py-1 rounded-full border border-maroon-100">
              {selectedPost.category}
            </span>
            <h1 className="font-display text-2xl sm:text-4xl font-extrabold text-stone-900 dark:text-zinc-100 leading-tight">
              {selectedPost.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-xs text-stone-500 dark:text-zinc-400 pt-1 font-medium border-y border-stone-200/50 dark:border-zinc-800 py-3">
              <div className="flex items-center gap-2">
                <img src={selectedPost.author.avatar} alt={selectedPost.author.name} className="h-7 w-7 rounded-full object-cover" />
                <span className="font-semibold text-stone-800 dark:text-zinc-300">{selectedPost.author.name}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4 text-stone-400" />
                {selectedPost.readingTime}
              </div>
              <span>•</span>
              <div>Published: {selectedPost.date}</div>
              <div className="ml-auto flex items-center gap-3 font-mono text-[10.5px]">
                <div className="flex items-center gap-1"><Eye className="h-3.5 w-3.5" /> {selectedPost.views}</div>
                <button onClick={(e) => handleLike(selectedPost.id, e)} className="flex items-center gap-1 text-red-500 hover:scale-105 transition"><Heart className="h-3.5 w-3.5 fill-current" /> {selectedPost.likes}</button>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="h-72 sm:h-96 rounded-3xl overflow-hidden shadow-lg border border-stone-100 dark:border-zinc-800">
            <img src={selectedPost.featuredImage} alt={selectedPost.title} className="w-full h-full object-cover" />
          </div>

          {/* Body Content */}
          <div className="markdown-body text-stone-700 dark:text-zinc-300 text-sm sm:text-base leading-relaxed space-y-6 whitespace-pre-line font-serif max-w-none">
            {selectedPost.content}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-4 border-t border-stone-200/50 dark:border-zinc-800">
            {selectedPost.tags.map((tag, i) => (
              <span key={i} className="text-xs bg-stone-100 dark:bg-zinc-800/80 text-stone-600 dark:text-zinc-400 px-3 py-1 rounded-full font-medium">
                #{tag}
              </span>
            ))}
          </div>

          {/* Author Bio Box */}
          <div className="bg-stone-50 dark:bg-zinc-900 rounded-3xl p-6 border border-stone-200/60 dark:border-zinc-800/80 flex flex-col sm:flex-row gap-5 items-center sm:items-start">
            <img src={selectedPost.author.avatar} alt={selectedPost.author.name} className="h-16 w-16 rounded-2xl object-cover border border-stone-200/30 shrink-0" />
            <div className="space-y-1.5 text-center sm:text-left">
              <h4 className="font-display font-bold text-stone-800 dark:text-zinc-200 text-sm sm:text-base">{selectedPost.author.name}</h4>
              <p className="text-xs text-saraiki-maroon dark:text-maroon-400 font-bold">{selectedPost.author.role}</p>
              <p className="text-xs text-stone-500 dark:text-zinc-400 leading-relaxed">{selectedPost.author.bio}</p>
            </div>
          </div>

          {/* Comments Section */}
          <div className="space-y-6 pt-6">
            <h3 className="font-display text-lg sm:text-xl font-bold text-stone-900 dark:text-zinc-100 flex items-center gap-2">
              <MessageSquare className="h-5.5 w-5.5 text-saraiki-maroon" />
              Comments ({selectedPost.comments.length})
            </h3>

            {/* Write comment Form */}
            <form onSubmit={handleCommentSubmit} className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-stone-200/60 dark:border-zinc-800 space-y-4">
              <h4 className="font-display font-bold text-xs text-stone-800 dark:text-zinc-300 uppercase tracking-wider">Leave a Scholarly Comment</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  value={commentName}
                  onChange={(e) => setCommentName(e.target.value)}
                  className="w-full bg-stone-100 dark:bg-zinc-800/60 border border-stone-200 dark:border-zinc-700/80 rounded-xl py-2 px-4 text-xs text-stone-800 dark:text-zinc-100 focus:outline-none focus:ring-1 focus:ring-saraiki-maroon"
                />
                <input
                  type="email"
                  placeholder="Email Address (private)"
                  required
                  value={commentEmail}
                  onChange={(e) => setCommentEmail(e.target.value)}
                  className="w-full bg-stone-100 dark:bg-zinc-800/60 border border-stone-200 dark:border-zinc-700/80 rounded-xl py-2 px-4 text-xs text-stone-800 dark:text-zinc-100 focus:outline-none focus:ring-1 focus:ring-saraiki-maroon"
                />
              </div>
              <textarea
                placeholder="Write your constructive thoughts here..."
                required
                rows={4}
                value={commentContent}
                onChange={(e) => setCommentContent(e.target.value)}
                className="w-full bg-stone-100 dark:bg-zinc-800/60 border border-stone-200 dark:border-zinc-700/80 rounded-xl py-2 px-4 text-xs text-stone-800 dark:text-zinc-100 focus:outline-none focus:ring-1 focus:ring-saraiki-maroon"
              />
              <button
                type="submit"
                className="flex items-center justify-center gap-1.5 bg-saraiki-maroon hover:bg-maroon-800 text-white font-bold text-xs py-2 px-5 rounded-xl transition"
              >
                Submit Comment <Send className="h-3.5 w-3.5" />
              </button>
              {commentSuccess && (
                <div className="text-xs text-green-600 flex items-center gap-1 animate-pulse font-semibold">
                  Comment submitted and approved in portal sandbox.
                </div>
              )}
            </form>

            {/* Comments List */}
            <div className="space-y-4">
              {selectedPost.comments.map((comm) => (
                <div key={comm.id} className="bg-stone-50 dark:bg-zinc-900/60 p-4 rounded-2xl border border-stone-200/40 dark:border-zinc-800/80 space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-stone-800 dark:text-zinc-200">
                      <div className="h-6 w-6 rounded-full bg-stone-200 dark:bg-zinc-800 flex items-center justify-center text-[10px] text-stone-600 dark:text-zinc-400">
                        <User className="h-3 w-3" />
                      </div>
                      {comm.author}
                    </div>
                    <span className="text-[10px] font-mono text-stone-400 dark:text-zinc-500">{comm.date}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-600 dark:text-zinc-400 leading-relaxed pl-7">
                    {comm.content}
                  </p>
                </div>
              ))}
              {selectedPost.comments.length === 0 && (
                <p className="text-center text-xs text-stone-400 py-4">Be the first to share your comment on this post.</p>
              )}
            </div>
          </div>
        </article>
      ) : (
        /* Blog List and Search View */
        <div className="space-y-8 animate-fade-in">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-stone-900 dark:text-zinc-100 flex items-center gap-2">
                <BookOpen className="text-saraiki-maroon h-7 w-7" />
                Latest Research Articles & News
              </h1>
              <p className="text-xs sm:text-sm text-stone-500 dark:text-zinc-400 mt-1">
                Scholarly writings and updates preserving the cultural essence of South Punjab.
              </p>
            </div>

            {/* Interactive Search Bar */}
            <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder="Search research titles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800 rounded-xl py-2 pl-9 pr-4 text-xs focus:outline-none focus:ring-1 focus:ring-saraiki-maroon focus:border-transparent dark:text-zinc-100"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-stone-400 dark:text-zinc-500" />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="absolute right-3 top-2.5 text-stone-400 hover:text-stone-600 text-[10px]">
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Categories Selector */}
          <div className="flex gap-1.5 overflow-x-auto no-scrollbar pb-1 border-b border-stone-200/50 dark:border-zinc-800 select-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setActiveTag(null);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? 'bg-saraiki-maroon text-white font-bold'
                    : 'text-stone-600 dark:text-zinc-400 hover:bg-stone-100 dark:hover:bg-zinc-800/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Main Layout Grid: Blogs vs Tag-cloud */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Blogs List */}
            <div className="lg:col-span-9 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredBlogs.map((post) => (
                  <article
                    key={post.id}
                    onClick={() => handlePostClick(post)}
                    className="group bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-stone-200/60 dark:border-zinc-800/80 hover:shadow-lg transition-all duration-350 flex flex-col justify-between h-[420px] cursor-pointer"
                  >
                    <div>
                      <div className="h-44 relative overflow-hidden">
                        <img
                          src={post.featuredImage}
                          alt={post.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-103 transition duration-500"
                        />
                        <span className="absolute top-3 left-3 text-[9px] font-bold bg-saraiki-maroon text-white px-2.5 py-0.5 rounded-full uppercase">
                          {post.category}
                        </span>
                      </div>

                      <div className="p-5 space-y-2.5">
                        <div className="flex items-center gap-2 text-[10px] font-mono text-stone-400 dark:text-zinc-500 font-bold">
                          <span>{post.date}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readingTime}</span>
                        </div>
                        <h3 className="font-display font-bold text-stone-900 dark:text-zinc-100 group-hover:text-saraiki-maroon dark:group-hover:text-maroon-400 transition text-sm sm:text-base line-clamp-2 leading-snug">
                          {post.title}
                        </h3>
                        <p className="text-xs text-stone-500 dark:text-zinc-400 line-clamp-3 leading-relaxed">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="p-5 pt-0 flex justify-between items-center border-t border-stone-100/60 dark:border-zinc-800/50 text-[10.5px] font-mono text-stone-400 dark:text-zinc-500">
                      <div className="flex items-center gap-2">
                        <img src={post.author.avatar} alt={post.author.name} className="h-5 w-5 rounded-full object-cover" />
                        <span className="font-sans font-bold text-stone-600 dark:text-zinc-300 truncate max-w-[100px]">{post.author.name}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <button onClick={(e) => handleLike(post.id, e)} className="flex items-center gap-0.5 hover:text-red-500 transition">
                          <Heart className="h-3.5 w-3.5 fill-current text-red-500" /> {post.likes}
                        </button>
                        <button onClick={(e) => handleShare(post, e)} className="hover:text-stone-600 transition" title="Share Article">
                          <Share2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {filteredBlogs.length === 0 && (
                <div className="bg-stone-50 dark:bg-zinc-900/40 border border-stone-200/50 dark:border-zinc-800 rounded-2xl py-12 text-center text-stone-500 space-y-2">
                  <BadgeAlert className="h-8 w-8 mx-auto text-stone-400" />
                  <p className="text-sm font-semibold">No research blogs found matching your filters.</p>
                  <p className="text-xs text-stone-400">Try adjusting your query or resetting the category.</p>
                </div>
              )}
            </div>

            {/* Right sidebar: tag cloud & stats */}
            <aside className="lg:col-span-3 space-y-6">
              {/* Tag Cloud */}
              <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-stone-200/60 dark:border-zinc-800 p-5 space-y-3">
                <h4 className="font-display font-bold text-xs text-stone-800 dark:text-zinc-200 uppercase tracking-wider">Popular Tags</h4>
                <div className="flex flex-wrap gap-1.5">
                  <button
                    onClick={() => setActiveTag(null)}
                    className={`px-2 py-1 rounded text-[11px] font-medium transition ${
                      activeTag === null
                        ? 'bg-saraiki-blue text-white'
                        : 'bg-stone-100 dark:bg-zinc-800/80 text-stone-600 dark:text-zinc-400 hover:bg-stone-200/80'
                    }`}
                  >
                    #All
                  </button>
                  {allTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setActiveTag(tag)}
                      className={`px-2 py-1 rounded text-[11px] font-medium transition ${
                        activeTag === tag
                          ? 'bg-saraiki-blue text-white'
                          : 'bg-stone-100 dark:bg-zinc-800/80 text-stone-600 dark:text-zinc-400 hover:bg-stone-200/80'
                      }`}
                    >
                      #{tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Research Metrics card */}
              <div className="bg-gradient-to-br from-[#0f4c81] to-[#072d4e] text-zinc-100 rounded-2xl p-5 border border-[#0d406d]/80 relative overflow-hidden">
                <div className="absolute inset-0 ajrak-pattern opacity-[0.03] pointer-events-none" />
                <h4 className="font-display font-bold text-xs text-saraiki-gold uppercase tracking-wider mb-2.5 flex items-center gap-1">
                  <Sparkles className="h-4 w-4" />
                  Scholarly Metrics
                </h4>
                <div className="space-y-3 relative z-10 text-[11px] font-medium">
                  <div className="flex justify-between">
                    <span className="text-zinc-300">Total Indexed Papers:</span>
                    <span className="font-mono text-white">45 Research Guides</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-300">Registered Authors:</span>
                    <span className="font-mono text-white">12 Anthropologists</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-300">Sufi Manuscript Scans:</span>
                    <span className="font-mono text-white">1,240 digitized pages</span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      )}

    </div>
  );
}
