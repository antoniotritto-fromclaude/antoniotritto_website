import Parser from 'rss-parser';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, ExternalLink, ArrowRight } from 'lucide-react';

type CustomItem = {
  title: string;
  link: string;
  pubDate: string;
  contentSnippet?: string;
  content?: string;
  isoDate?: string;
};

async function getNewsletterFeed() {
  const parser = new Parser();
  try {
    const feed = await parser.parseURL('https://antoniotritto.substack.com/feed');
    return feed.items as CustomItem[];
  } catch (error) {
    console.error('Error fetching RSS feed:', error);
    return [];
  }
}

export default async function NewsletterPage() {
  const posts = await getNewsletterFeed();

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h1 className="font-oswald text-5xl md:text-7xl font-bold uppercase mb-6 tracking-tight text-navy">
            NEWSLETTER
          </h1>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            Resta aggiornato sulle ultime analisi di mercato, strategie di gestione patrimoniale e consigli esclusivi direttamente dalla mia newsletter su Substack.
          </p>
          
          <div className="mt-12">
            <a 
              href="https://antoniotritto.substack.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-navy text-white px-8 py-4 rounded-md font-bold hover:bg-amber-500 transition-colors shadow-lg"
            >
              Iscriviti su Substack
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {posts.map((post, index) => (
                <article key={index} className="flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group">
                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex items-center gap-2 text-amber-500 text-xs font-bold uppercase tracking-widest mb-4">
                      <Calendar className="w-4 h-4" />
                      {post.pubDate ? new Date(post.pubDate).toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' }) : 'Data non disponibile'}
                    </div>
                    
                    <h2 className="font-oswald text-2xl font-bold uppercase mb-4 text-navy line-clamp-2 group-hover:text-amber-500 transition-colors">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-8 line-clamp-3 font-light">
                      {post.contentSnippet || 'Leggi l\'ultimo aggiornamento sulla mia newsletter ufficiale.'}
                    </p>
                    
                    <div className="mt-auto">
                      <a 
                        href={post.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-navy font-bold text-xs uppercase tracking-widest hover:text-amber-500 transition-colors"
                      >
                        Leggi l&apos;articolo
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg italic">Caricamento degli articoli in corso o feed non disponibile...</p>
              <a href="https://antoniotritto.substack.com" className="text-amber-500 underline mt-4 inline-block">Visita direttamente Substack</a>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
