import Layout from '@/components/Layout';
import Chat from '@/components/chat';

function App() {
  // Debug: Log environment variables on app startup
  console.log('🚀 App startup - Environment variables:', {
    NODE_ENV: import.meta.env.MODE,
    VITE_N8N_WEBHOOK_URL: import.meta.env.VITE_N8N_WEBHOOK_URL,
    VITE_NODE_ENV: import.meta.env.VITE_NODE_ENV,
    allEnvVars: import.meta.env
  });

  return (
    <Layout>
      <div className="h-full">
        <Chat />
      </div>
    </Layout>
  );
}

export default App
