'use client';
import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useRouter } from 'next/navigation';

export default function AuthForm({ type }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = type === 'login'
      ? await supabase.auth.signInWithPassword({ email, password })
      : await supabase.auth.signUp({ email, password });

    if (!error) router.push('/');
    else alert(error.message);
  };

  return (
    <div className="bg-[var(--light-bg)] p-10 rounded-2xl shadow-lg w-full max-w-lg">
      <h2 className="text-2xl font-semibold mb-6 text-[var(--primary)] text-center">
        {type === 'login' ? 'Login' : 'Sign Up'}
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div>
          <label
            className="block text-sm text-[var(--text-color)]"
            style={{ marginBottom: '10px', display: 'block', fontWeight: '500' }}
          >
            Email
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 bg-[var(--input-bg)] border border-[var(--input-border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
          />
        </div>

        <div>
          <label
            className="block text-sm text-[var(--text-color)]"
            style={{ marginBottom: '10px', display: 'block', fontWeight: '500' }}
          >
            Password
          </label>
          <input
            type="password"
            placeholder="********"
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 bg-[var(--input-bg)] border border-[var(--input-border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
          />
        </div>

        <button
          type="submit"
          className="mt-4 w-full bg-[var(--primary)] text-white py-2 rounded-lg hover:bg-[var(--btn-hover)] transition"
        >
          {type === 'login' ? 'Login' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
}
